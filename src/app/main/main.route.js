(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  }

})();
