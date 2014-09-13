(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('SocianAdmin', [
        'ui.router',
        'SocianAdmin.Navigation',
        'SocianAdmin.Settings'
    ]).
    config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/settings');
    }]);
})();

