'use strict';

angular.module('pasteApp.Api', ['ngResource'])
   .factory("Paste", function ($resource, $http) {
        $http.defaults.useXDomain = true;
       return $resource(
           "http://laraveldev.fr/api/paste/:id",
           {id: "@id" },
           { "update": {method:"PUT"} }
      );
  });