(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('TransactionunitController', TransactionunitController);

  /** @ngInject */
  function TransactionunitController($scope) {
    var _this = this;
    $scope.clickMe = function(event) {
      console.log(event);
      if (event.target.classList.contains("hide")) {
        event.target.classList.remove("hide");
        event.target.classList.add("show");
      } else {
        event.target.classList.remove("show");
        event.target.classList.add("hide");
      }
    }
  }
})();
