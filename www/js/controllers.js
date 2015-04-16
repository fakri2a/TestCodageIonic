angular.module('ionic-http-auth.controllers', [])
.controller('AppCtrl', function($scope, $state, $ionicModal) {
   
  $ionicModal.fromTemplateUrl('templates/login.html', function(modal) {
      $scope.loginModal = modal;
    },
    {
      scope: $scope,
      animation: 'slide-in-up',
      focusFirstInput: true
    }
  );
  
})
  
.controller('LoginCtrl',  function($scope, $http, $state, AuthenticationService, $ionicLoading, $timeout,$ionicPopup) {
  $scope.message = "";
  $scope.data = {};
    $scope.login = function() {


        AuthenticationService.postConfigure($scope.data.ssid, $scope.data.password).success(function(data) {
          


          $http.post('https://login', { ssid: $scope.data.ssid, password: $scope.data.password })
      .success(function (data, status, headers, config) {
          console.log('Data is -> ' + data);
          console.log('Status is -> ' + status);

           $ionicLoading.show({
            duration: 3000,
            noBackdrop: false,
            // templateUrl: 'templates/login.html'
      
    });

         
          
        })
            .error(function (data, status, headers, config) {
      

      });
    
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'ssid ou mdp inconnue !',
                template: 'verrifier vos informations'
            });
        });

          if(AuthenticationService.getStatus()==200)
            {
              $state.go('tab');
            }
            else
            {
              alert('error 400');
            }
    }


 



    

})
 




 
