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
      .state('app.userlist', {
        url: '/userlist',
        templateUrl: 'app/components/userlist/userlist.html',
        controller: 'UserlistController',
        controllerAs: 'userlist'
      });
  }

})();
