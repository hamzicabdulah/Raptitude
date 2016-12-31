var app = angular.module('raptitude', ['ui.router']);

app.controller('raptitudeCtrl', function ($scope, $http) {
  $http.get('stories.json').
    success(function(data) {
      $scope.posts = data;
    }).
    error(function(data) {
      console.log('error');
    });
    console.log($scope.posts);
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
