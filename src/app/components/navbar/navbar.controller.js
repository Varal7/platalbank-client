(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .controller('NavbarController', NavBarController);

  /** @ngInject */
  function NavBarController($scope,$mdDialog) {
    var _this = this;

    _this.binets = [{name: 'BR', balance:'2000', logo:''},
                    {name:'BB', balance:'20', logo:''}];
    _this.showBinets = true;
  $scope.navigateTo = function(to, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Navigating')
          .content('Imagine being taken to ' + to)
          .ariaLabel('Navigation demo')
          .ok('Neat!')
          .targetEvent(event)
      );
    }
    $scope.toggleDisplay = function(event){
      _this.showBinets=!_this.showBinets;
    }

  }
})();
