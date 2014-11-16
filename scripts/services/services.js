(function(){

    'use strict';

    angular.module('app').factory('geoLocationService', ['$q', '$http', function($q, $http){
        
        var getLocation = function() {
            
            var defer = $q.defer();
            
            // If supported and have permission for location...
            if (navigator.geolocation) {
                
                // 
                navigator.geolocation.getCurrentPosition(function(position){
                    
                    var result = {latitude : position.coords.latitude , longitude : position.coords.longitude}
                    
                    // Adding randomization since we are all in the same location...
                    result.latitude += (Math.random() >0.5? -Math.random()/100 : Math.random()/100  ) ;
                    result.longitude += (Math.random() >0.5? -Math.random()/100 : Math.random()/100  ) ;
                    
                    getNearbyCity(result.latitude, result.longitude).then(function(data){
                        result.address = data.data.results[1].formatted_address;
                        defer.resolve(result);
                    });
                    
                    
                }, function(error){
                    
                    defer.reject({message: error.message, code:error.code});
                    
                });
            }
            else {
                defer.reject({error: 'Geolocation not supported'});
            }
            
            return defer.promise;
        }
        
        var getNearbyCity = function (latitude, longitude){
            
            var defer = $q.defer();
            var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude +',' + longitude +'&sensor=true';
            
            $http({method: 'GET', url: url}).
                success(function(data, status, headers, config) {
                  
                     defer.resolve({data : data});
                }).
                error(function(data, status, headers, config) {
                  defer.reject({error: 'City not found'});
                });

            return defer.promise;
        }
    
        var service = {
            getLocation : getLocation,
            getNearbyCity: getNearbyCity
        };
        
        return service;
    }]);

})();