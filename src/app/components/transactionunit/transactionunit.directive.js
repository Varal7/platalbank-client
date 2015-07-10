(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .directive('transactionunit', transactionunit);

  /** @ngInject */
  function transactionunit() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/transactionunit/transactionunit.html',
      controller: 'TransactionunitController',
      controllerAs: 'transactionunit',
      bindToController: true
    };

    return directive;
  }

})();
