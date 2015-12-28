'use strict';

import angular from 'angular';

angular.module('ng-madlibs')
  .controller('madlibs', [
    '$scope',
    function ($scope) {
      $scope.ml = function (blankName) {
        return this[blankName] || '{{' + blankName.replace('_', ' ') + '}}';
      };
    }]);
