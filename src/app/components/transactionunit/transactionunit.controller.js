(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('TransactionunitController', TransactionunitController);

  /** @ngInject */
  function TransactionunitController($scope) {
    var _this = this;
    var displayed = undefined;
    $scope.clickMe = function(event) {
      if (displayed) {
        displayed.classList.remove("show");
      }
      displayed = event.target;
      displayed.classList.add("show");
    }
  }
})();
