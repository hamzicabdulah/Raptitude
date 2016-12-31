var app = angular.module('raptitude', ['ui.router']);

app.controller('raptitudeCtrl', function ($http, $scope, $timeout) {
  var _this = this;
  _this.data = {};
  $http.get("stories.json")
    .then(function(response) {
        _this.data = response.data;
    }, function(response) {
        console.log("Something went wrong");
    });
  $timeout(function () {
    console.log(_this.data);
    $scope.stories = _this.data;
  }, 1000)
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
