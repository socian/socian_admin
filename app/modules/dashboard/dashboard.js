/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    
    var DashboardController = function() {
        this.title = "Dashboard";
    }
    
    angular.module('SocianAdmin.Dashboard', [])
            
            .config(['$stateProvider', function($stateProvider) {
                    $stateProvider.state('dashboard', {
                        url : '/dashboard',
                        templateUrl : 'modules/dashboard/dashboard.html',
                        controller : 'DashboardController',
                        controllerAs : 'dashboard'
                    });
            }])
            
            .controller('DashboardController', [DashboardController]);
})();

