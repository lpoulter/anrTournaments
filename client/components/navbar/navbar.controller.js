'use strict';

angular.module('helloYoApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
        'title': 'Home',
        'link': '/'
      },{
        'title': 'Add Tournament',
        'link': '/addTournament'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
