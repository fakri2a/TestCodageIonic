// testing controller
describe('LoginCtrl', function() {
   var $httpBackend, $rootScope, createController, authRequestHandler, $state,  $http,  AuthenticationService, $ionicLoading, $timeout,$ionicPopup;

   // Set up the module
   beforeEach(module('ionic-http-auth.controllers'));
   beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('LoginCtrl', {'$scope': scope, $http, $state, AuthenticationService, $ionicLoading, $timeout,$ionicPopup
            });
        };
    }));

 

/*
beforeEach(module(function($provide) {

        var service {
         var status;
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


    };

    $provide.value('AuthenticationService',service)
}));  
*/
   

   it('doit pouvoir s authentifier', function() {
     var controller = createController();
   // spyOn(service, 'postConfigure');
    //scope.postConfigure('123','mdp');

    
   // expect(status==200).toEqual(true);

   });

     it('should fail authentication', function() {
   
  //  expect(status==400).toEqual(true);
   });
});