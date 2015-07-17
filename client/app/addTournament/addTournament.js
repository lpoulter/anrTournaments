'use strict';

angular.module('helloYoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('addTournament', {
        url: '/addTournament',
        templateUrl: 'app/addTournament/addTournament.html',
        controller: 'AddTournamentCtrl'
      });
  });
