(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
