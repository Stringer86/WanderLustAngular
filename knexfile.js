'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/wanderLustAngular_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/wanderLustAngular_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
