'use strict';

angular.module('pasteApp').controller('ShowCtrl', ['$scope', '$routeParams', '$location', 'Paste', function ($scope, $routeParams, $location, Paste) {

    $scope.paste = new Paste();

    Paste.get({id: $routeParams.uniqid}, function (objet) {
        $scope.paste = objet;
    }, function(error) {
        alert('Error dude');
    });

    $scope.new = function() {
        $location.path("/new");
    };

    $scope.fork = function(paste) {
        $location.path("/fork/"+paste.uniqid);
    };

}]);



angular.module('pasteApp')
    .directive('prettyprint', function($sanitize) {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
            scope.$watch('paste.code', function(newValue, oldValue) {
                if (!!newValue) {
                    element.html(
                        prettyPrintOne(
                            $sanitize(newValue.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')),
                            null,
                            true
                        )
                    );
                }
             }, true);
        }
    };
});
