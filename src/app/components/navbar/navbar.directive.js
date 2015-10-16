(function () {
  'use strict';

  angular
    .module('ddayApp')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'navbar'
    };

    /** @ngInject */
    function NavbarController (Auth) {
      var vm = this;

      vm.logout = Auth.logout;
    }
  }

})();
