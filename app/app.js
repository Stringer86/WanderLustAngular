import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

import SignInCtrl from './signup/signin.controller';
import SignInService from './signup/signin.services';

import FavoritesCtrl from './favorites/favorites.controller';
import FavoritesService from './favorites/favorites.services';

import CountryService from './country/country.services';
import DescriptionCtrl from './country/description.controller';
import ImagesCtrl from './country/images.controller';
import TravelCtrl from './country/travel.controller';

angular.module('my-app', [angularMaterialize, uiRouter])
.service('SignInService', SignInService)
.service('FavoritesService', FavoritesService)
.service('CountryService', CountryService)
.controller('FavoritesCtrl', FavoritesCtrl)
.controller('SignInCtrl', SignInCtrl)
.controller('DescriptionCtrl', DescriptionCtrl)
.controller('ImagesCtrl', ImagesCtrl)
.controller('TravelCtrl', TravelCtrl)
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
