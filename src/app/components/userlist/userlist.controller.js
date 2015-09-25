(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('UserlistController', UserlistController);

  /** @ngInject */
  function UserlistController() {
    var _this = this;
    this.userlist = 
    [
      {
        user: "Vicor",
        amount: 18
      },
      {
        user: "LEO",
        amount: 42
      },
      {
        user: "BR",
        amount: 9527
      },
      {
        user:"BOB",
        amount:-100
      },
      {
        user: "GénéK",
        amount: -20
      }
    ]
  }
})();
