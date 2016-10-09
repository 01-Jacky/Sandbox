'use strict';

describe('Controller: PlotlydemoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var PlotlydemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlotlydemoCtrl = $controller('PlotlydemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlotlydemoCtrl.awesomeThings.length).toBe(3);
  });
});
