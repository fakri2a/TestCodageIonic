
angular.module('ionic-http-auth', [
  'ionic',
  'ngMockE2E',
  'LocalStorageModule',
  'ionic-http-auth.services',
  'ionic-http-auth.controllers'])

  .run(function($rootScope, $ionicPlatform, $httpBackend) {

	$ionicPlatform.ready(function() {
    if(window.StatusBar) {
     
      StatusBar.styleDefault();
    }
  });
  
 

  $httpBackend.whenPOST('https://login').respond(function(method, url, data) {
    var authorizationToken = 'NjMwNjM4OTQtMjE0Mi00ZWYzLWEzMDQtYWYyMjkyMzNiOGIy';
    return  [200 , { authorizationToken: authorizationToken } ];
  });


  
  $httpBackend.whenGET(/.*/).passThrough();
  
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
    })
   

      .state('tab', {
    url: "/tab",

    templateUrl: "templates/tabs.html"
     
  })

  

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'LoadingCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise("/login");
});
