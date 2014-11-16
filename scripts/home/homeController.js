(function(){

    'use strict';

    angular.module('app').controller('home', home);

    
    function home(geoLocationService){

        var vm =this;
        vm.includeLocation = true;
        vm.location = {};
        vm.message = "Hello from Home";
        

        init();
        
        function init(){
            vm.message = "Hello from homeController init method";
            geoLocationService.getLocation().then(function(result){
                vm.location = result;
            });
        }
        
        vm.save = function(){
            
            // Implement our save function to persist data to Firebase
            
        }
    }
})();

