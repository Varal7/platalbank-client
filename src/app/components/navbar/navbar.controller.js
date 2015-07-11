(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('NavbarController', NavBarController);

  /** @ngInject */
  function NavBarController() {
    var _this = this;

    _this.binets = [{name: 'BR', balance:'2000', logo:''},
                    {name:'BB', balance:'20', logo:''}];

  }
})();
