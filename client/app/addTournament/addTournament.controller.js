/**
 * Created by Laurie on 17/07/2015.
 */
'use strict';

angular.module('helloYoApp')
  .controller('AddTournamentCtrl', function ($scope, $http) {

    $scope.trny = {};

    $scope.addTrny = function(){
      $http.post('/api/tournaments', {
        trny: $scope.trny
      }).success(function(response) {
        console.log(response)
      });
    }
  });
