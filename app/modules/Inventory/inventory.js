/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    var InventoryController = function($state) {
        this.title = "Inventory";
    }
    
    angular.module('SocianAdmin.Inventory', [])
            
            .config(['$stateProvider', function($stateProvider) {
                    $stateProvider.state('inventory', {
                        url : '/inventory',
                        templateUrl : 'modules/inventory/inventory.html',
                        controller : 'InventoryController',
                        controllerAs : 'inventory'
                    });
            }])
            
            .controller('InventoryController', '$state', [InventoryController]);
})();


