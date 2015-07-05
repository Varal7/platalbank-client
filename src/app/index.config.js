(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
