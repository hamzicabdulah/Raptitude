var app = angular.module('raptitude', ['ui.router']);
app.controller('raptitudeCtrl', function ($scope) {
  $scope.var = 1;
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
    });
    .state('app.features', {
      url:'features',
      views: {
        'content@': {
          templateUrl : 'features.html'
        }
      }
    });
});
