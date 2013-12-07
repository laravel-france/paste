'use strict';

angular.module('pasteApp.Api', ['ngResource', 'pasteApp.config'])
   .factory("Paste", ["$resource", "$http", "apiBaseUrl", function ($resource, $http, apiBaseUrl) {
        $http.defaults.useXDomain = true;
       return $resource(
           apiBaseUrl + "/api/paste/:id",
           {id: "@id" },
           { "update": {method:"PUT"} }
      );
  }]);