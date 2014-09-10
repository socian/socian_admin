/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    var InventoryController = function() {
        this.title = "Inventory";
    }
    
    angular.module('SocianAdmin.Inventory', ['ngRoute'])
            .config(['$routeProvider', function($routeProvider) {
                    $routeProvider.when('/inventory', {
                        templateUrl : 'inventory/inventory.html',
                        controller : 'InventoryController',
                        controllerAs : 'inventory'
                    });
            }])
            .controller('InventoryController', [InventoryController]);
})();


