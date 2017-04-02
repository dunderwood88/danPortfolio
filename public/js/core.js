//core.js

    // create the module and name it danApp
    var danApp = angular.module('danApp', ['ngRoute', 'ngAnimate']);

    //configure our routes
    danApp.config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider){

        $locationProvider.html5Mode(true);

        $routeProvider

            //route for the homepage
            .when('/',{
                templateUrl: '/pages/landingPage.html'
            })

            //route for professional page
            .when('/professional',{
                templateUrl: '/pages/professional.html',
                controller: 'professionalController'
            })

            //route for personal page
            .when('/personal',{
                templateUrl: '/pages/personal.html',
                controller: 'personalController'
            })

            //route for contact page
            .when('/contact',{
                templateUrl: '/pages/contact.html',
                controller: 'contactController'
            })

            //route for about page
            .when('/about',{
                templateUrl: '/pages/about.html'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);


    //Controllers for each page
    danApp.controller('landingPageController', function($scope) {

    });

    danApp.controller('personalController', ['$scope', '$http', function($scope, $http) {

        $scope.images = [];

        $http.get('/api/images/', { cache: true})
            .then(function(response){
                $scope.images = response.data;

            });

    }]);

    
    danApp.controller('contactController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.data = {};
        $scope.instaPics = [];

        $http.get('/api/instafeed/', { cache: true})
            .then(function(response){
                $scope.instaPics = response.data.data;
            });


        $scope.submit = function() {
            if ($scope.name && $scope.email && $scope.mail) {

                $scope.alertMessage = 'sending message...';
                $scope.showAlert = true;
                $scope.alertClass = 'messageSent';

                // Simulate 2 seconds loading delay
                $timeout(function() {
                }, 200);

                $scope.body = {
                  name: $scope.name,
                  email: $scope.email,
                  message: $scope.mail
                };

                $http.post('/api/mail/send', $scope.body)
                    .then(function(response){
                        $scope.resetForm();
                        $scope.alertMessage = 'message sent!';
                        $scope.alertClass = 'messageSent';

                        // Loadind done here - Show message for 3 more seconds.
                        $timeout(function() {
                            $scope.showAlert = false;
                        }, 3000);

                    })
                    .catch(function(error){
                        $scope.mail = error.statusText;
                        $scope.alertMessage = 'there was an error while sending your message. please try again.';
                        $scope.alertClass = 'warning';

                        // Simulate 2 seconds loading delay
                        $timeout(function() {
                        }, 200);
                });
              
            }
            else {

                $scope.alertMessage = 'all fields required!';
                $scope.showAlert = true;
                $scope.alertClass = 'warning';

                // Simulate 2 seconds loading delay
                $timeout(function() {
                }, 200);

            };
              
      };
      
      $scope.resetForm =function() {
          $scope.name = '';
          $scope.email = '';
          $scope.mail = '';
        
      }
    }]);