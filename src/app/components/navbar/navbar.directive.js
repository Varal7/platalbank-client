(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {


      },
      controller: 'NavbarController',
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;
  }

})();
