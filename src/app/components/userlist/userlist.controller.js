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
      },
      {
        user: "TEST",
        amount: 2015
      }
    ];
    this.list_order = 'user';
    
    this.negative = function(test)
    {
        return function(item)
        {
          if(test == "all")
            return item;
          else
            if(item.amount < 0)
              return item;
      
        }
    };
  }
})();
