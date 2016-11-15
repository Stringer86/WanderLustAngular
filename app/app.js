import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

import SignInCtrl from './signup/signin.controller';
import SignInService from './signup/signin.services';

import FavoritesCtrl from './favorites/favorites.controller';
import FavoritesService from './favorites/favorites.services';


angular.module('my-app', [angularMaterialize, uiRouter])
.service('SignInService', SignInService)
.service('FavoritesService', FavoritesService)
.controller('FavoritesCtrl', FavoritesCtrl)
.controller('SignInCtrl', SignInCtrl)
.config(['$stateProvider', ($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'views/home.html',
    })
    .state('main', {
      url: '/',
      templateUrl: 'views/home.html',
    })
    .state('city', {
      url: '/city',
      templateUrl: 'views/city.html',
    })
    .state('country', {
      url: '/country',
      templateUrl: 'views/country.html',
    }).state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html'
    });
}]);
