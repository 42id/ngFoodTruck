(function(){

    'use strict';

    angular.module('app').controller('home',home);

    
    function home(){

        var vm =this;

        vm.message = "Hello from Home";

        init();
        
        function init(){
            vm.message = "Hello from homeController init method";
        }
        
    }
})();

