'use strict';

angular.module('pasteApp').controller('ForkCtrl', ['$scope', '$routeParams', '$location', 'Paste', function ($scope, $routeParams, $location, Paste) {

    $scope.paste = new Paste();
    Paste.get({id: $routeParams.uniqid}, function (objet) {
        $scope.paste.code = objet.code;
        console.log($scope.paste);
    }, function(error) {
        alert('Error dude');
    });

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
