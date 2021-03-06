'use strict';

const express = require('express');
const knex = require('../knex');
const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const { camelizeKeys } = require('humps');

const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err) => {
    res.verify = err === null;
    next();
  });
};

router.get('/api/token', (req, res) => {
  const token = req.cookies.token;

  jwt.verify(token, process.env.JWT_SECRET, (err, _decoded) => {
    if (err) {
      return res.send(false);
    }

    res.send(true);
  });
});

router.post('/api/token', authorize, (req, res, next) => {
  const { email, password } = req.body;

  let user;

  knex('users')
    .where('email', email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(400, 'Bad email or password');
      }

      user = camelizeKeys(row); 

      return bcrypt.compare(password, user.hashedPassword);
    })
    .then(() => {
      delete user.hashedPassword;

      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '3h'
      });

      res.cookie('token', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.send(user);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(400, 'Bad email or password'); // really bad password
    })
    .catch((err) => {
      console.log("hiyo");
      next(err);
    });
});

router.delete('/api/token', (req, res, _next) => {
  res.clearCookie('token');
  res.status(200);
  res.send(true);
});

module.exports = router;
