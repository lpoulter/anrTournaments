'use strict';

describe('Controller: ViewTournamentsCtrl', function () {

  // load the controller's module
  beforeEach(module('helloYoApp'));

  var ViewTournamentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewTournamentsCtrl = $controller('ViewTournamentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
