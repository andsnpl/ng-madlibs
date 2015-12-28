'use strict';

import angular from 'angular';

angular.module('ng-madlibs')
  .controller('madlibs', [
    '$scope',
    function ($scope) {
      $scope.prefs = {
        gender: 'F'
      };

      $scope.blanks = {};

      $scope.spaceify = function (snakeCaseName) {
        return snakeCaseName.replace(/_/g, ' ');
      };

      $scope.ml = function (blankName) {
        return this.blanks[blankName] || '{{' + this.spaceify(blankName) + '}}';
      };

      $scope.nameKey = function (gender) {
        return gender === 'M' ?
            'male_name' :
          gender === 'F' ?
            'female_name' :
          // gender === 'O' ?
            'name';
      };

      $scope.pron_2s_subjective = function (gender) {
        return gender === 'M' ?
            'he' :
          gender === 'F' ?
            'she' :
          // gender === 'O' ?
            'they';
      };

      $scope.pron_2s_objective = function (gender) {
        return gender === 'M' ?
            'him' :
          gender === 'F' ?
            'her' :
          // gender === 'O' ?
            'them';
      };

      $scope.pron_2s_genetive = function (gender) {
        return gender === 'M' ?
            'his' :
          gender === 'F' ?
            'her' :
          // gender === 'O' ?
            'their';
      };
    }]);
