var app = angular.module('raptitude', ['ui.router']);

app.controller('raptitudeCtrl', function ($http, $scope, $timeout) {
  $http.get("stories.json")
    .then(function(response) {
        $scope.stories = response.data;
    }, function(response) {
        console.log("Something went wrong");
    });
});

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('app', {
      url:'/',
      views: {
        'header': {
          templateUrl : 'header.html'
        },
        'content': {
          templateUrl : 'homepage.html'
        },
        'footer': {
          templateUrl : 'footer.html'
        }
      }
    })
    .state('app.features', {
      url:'features',
      views: {
        'content@': {
          templateUrl : 'features.html'
        }
      }
    });
});
