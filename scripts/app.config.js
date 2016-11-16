(function () {

  'use strict';

  angular.module('fipepwa').config(function($mdAriaProvider, blockUIConfig) {
    // Globally disables all ARIA warnings.
    $mdAriaProvider.disableWarnings();

    // Disable automatic blockUI $http interceptor
    blockUIConfig.autoBlock = false;
  });

})();
