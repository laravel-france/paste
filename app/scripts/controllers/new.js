'use strict';

angular.module('pasteApp').controller('NewCtrl', ['$scope', '$location', 'Paste', function ($scope, $location, Paste) {
    $scope.paste = new Paste();
    $scope.saving = false;

    $scope.save = function (form, paste) {
        if (form.$valid) {
            $scope.saving = true;
            paste.$save()
            .then(function(objet) {
                $location.path("/show/" + objet.uniqid);
            })
            .catch(function(response) {
                alert('Erreur lors de l\'enregistrement');
            })
            .finally(function() {
                $scope.saving = false;
            });
        }
    };
}]);
