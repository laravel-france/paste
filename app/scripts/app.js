'use strict';

angular.module('pasteApp', [
  'ngSanitize',
  'ngRoute',
  'pasteApp.Api'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl'
      })
      .otherwise({
        redirectTo: '/new'
      });
  });
