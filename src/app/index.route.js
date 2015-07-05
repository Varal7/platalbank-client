(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  }

})();
