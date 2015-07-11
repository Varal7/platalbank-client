(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .directive('transactionlist', transactionlist);

  /** @ngInject */
  function transactionlist() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/transactionlist/transactionlist.html',
      controller: 'TransactionlistController',
      controllerAs: 'tl',
      bindToController: true
    };

    return directive;
  }

})();
