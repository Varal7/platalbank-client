(function() {
  'use strict';

  angular
    .module('platalbankClient')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.user', {
        abstract: true,
        template: '<ui-view/>'
      })
      .state('app.user.home', {
        url: '/home',
        templateUrl: 'app/components/user/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });
  }

})();
