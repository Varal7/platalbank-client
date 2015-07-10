(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .directive('transaction', transaction);

  /** @ngInject */
  function transaction() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/transaction/transaction.html',
      controller: 'TransactionController',
      controllerAs: 'transaction',
      bindToController: true
    };

    return directive;
  }

})();
