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
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
    /** @ngInject */
    function HeaderController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"

    }

  }


})();
