var app  = angular.module('ionic-http-auth.services', ['http-auth-interceptor']);


app.service('AuthenticationService', function( $http, $q) {
var status;

       

  return {


        getStatus : function()
            {
              return status;
            },

        postConfigure: function(ssid, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            
            if (ssid == '123' && password == 'mdp') {
                deferred.resolve('Bienvenu');
                status = 200;

            } else {
                deferred.reject('Identifiant incorrect');
                status = 400;
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }




            return promise;
            
            

            
        }


    }


});





