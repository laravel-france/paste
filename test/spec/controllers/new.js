'use strict';

describe('Controller: NewCtrl', function () {

  // load the controller's module
  beforeEach(module('pasteApp'));

  var NewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewCtrl = $controller('NewCtrl', {
      $scope: scope
    });
  }));


  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });

  it('should have an empty code variable', function () {
    expect(scope.code.length).toBe(0);
  });
});
