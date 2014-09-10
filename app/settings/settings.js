/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    var SettingsController = function() {
        this.title = "Settings";
    }
    
    angular.module('SocianAdmin.Settings', ['ngRoute'])
            .config(['$routeProvider', function($routeProvider) {
                    $routeProvider.when('/settings', {
                        templateUrl : 'settings/settings.html',
                        controller : 'SettingsController',
                        controllerAs : 'settings'
                    });
            }])
            .controller('SettingsController', [SettingsController]);
})();


