(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .directive('header', header);

  /** @ngInject */
  function header() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      controller: 'HeaderController',
      controllerAs: 'header',
      bindToController: true
    };

    return directive;
  }

})();
