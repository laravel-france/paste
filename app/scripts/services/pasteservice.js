'use strict';

angular.module('pasteApp.Api', ['ngResource'])
   .factory("Paste", function ($resource) {
       return $resource(
           "http://laravel.fr/api/paste/:id",
           {id: "@id" },
           { "update": {method:"PUT"} }
      );
  });