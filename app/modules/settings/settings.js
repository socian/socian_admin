/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    var SettingsController = function($state) {
        this.title = "Settings";
    }
    
    angular.module('SocianAdmin.Settings', [])
           
            .config(['$stateProvider', function($stateProvider) {
                    $stateProvider.state("settings", {
                        url : "/settings",
                        templateUrl : "modules/settings/settings.html",
                        controller : "SettingsController",
                        controllerAs : "settingsCtrl"
                    });
            }])
            
            .controller('SettingsController', ['$state', SettingsController]);
        
})();


