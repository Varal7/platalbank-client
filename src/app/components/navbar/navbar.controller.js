(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('NavbarController', NavBarController);

  /** @ngInject */
  function NavBarController($mdDialog) {
    var _this = this;

    _this.binets = [{longname: 'Binet Réseau', shortname: 'BR', balance:'2000', logo:''},
                    {longname:'Binet Binouze', shortname:'Binouze', balance:'20', logo:''},
                    {longname:'Subaïsse', shortname:'subaisse', balance:'-443', logo:''},
                    {longname:'JTX', shortname:'JTX', balance:'12833', logo:''},
                    {longname:'Cabinet Start-up', shortname:'cabinet_start_up', balance:'3', logo:''}];
    _this.showBinets = true;
  _this.navigateTo = function(to, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Navigating')
          .content('Imagine being taken to ' + to)
          .ariaLabel('Navigation demo')
          .ok('Neat!')
          .targetEvent(event)
      );
    }
    _this.toggleDisplay = function(event){
      _this.showBinets=!_this.showBinets;
    }

  }
})();
