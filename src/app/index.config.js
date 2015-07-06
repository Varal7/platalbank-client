(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('amber');
  }

})();
