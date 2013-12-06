'use strict';

angular.module('pasteApp')
  .controller('NewCtrl', ['$scope', 'Paste', function ($scope, Paste) {
    $scope.paste = new Paste();
    $scope.saving = false;

    $scope.save = function (form, paste) {
        if (form.$valid) {
            $scope.saving = true;
            paste.$save()
                .then(function() {
                    alert('Sauvegarde OK');
                })
                .catch(function(response) {
                    alert('Sauvegarde NOK');
                })
                .finally(function() {
                    $scope.saving = false;
                });
        }
    }

}]);
