/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    
    var DashboardController = function() {
        this.title = "Dashboard";
    }
    
    angular.module('SocianAdmin.Dashboard', ['ngRoute'])
            .config(['$routeProvider', function($routeProvider) {
                    $routeProvider.when('/dashboard', {
                        templateUrl : 'dashboard/dashboard.html',
                        controller : 'DashboardController',
                        controllerAs : 'dashboard'
                    });
            }])
            .controller('DashboardController', [DashboardController]);
})();

