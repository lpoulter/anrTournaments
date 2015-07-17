'use strict';

angular.module('helloYoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewTournaments', {
        url: '/viewTournaments',
        templateUrl: 'app/viewTournaments/viewTournaments.html',
        controller: 'ViewTournamentsCtrl'
      });
  });