'use strict';

angular.module('pasteApp', [
  'ngSanitize',
  'ngRoute',
  'pasteApp.Api'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new', {
        templateUrl: 'views/form.html',
        controller: 'NewCtrl'
      })
      .when('/show/:uniqid', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .when('/fork/:uniqid', {
        templateUrl: 'views/form.html',
        controller: 'ForkCtrl'
      })
      .otherwise({
        redirectTo: '/new'
      });
  });
