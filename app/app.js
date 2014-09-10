(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('SocianAdmin', [
        'ngRoute',
        'SocianAdmin.Navigation',
        'SocianAdmin.Dashboard',
        'SocianAdmin.Inventory',
        'SocianAdmin.Settings'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/settings'});
    }]);
})();

