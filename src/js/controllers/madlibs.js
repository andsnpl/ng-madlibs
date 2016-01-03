import angular from 'angular';

angular.module('ng-madlibs')
//  .animation('.ng-hide', function () {
//    return {
//      addClass: function (element, className, doneFn) {
//        $(element).animate({ height: 0, opacity: 0 }, 500, 'linear', doneFn);
//      },
//      removeClass: function (element, className, doneFn) {
//        $(element).animate({ height: 384, opacity: 1 }, 500, 'linear', doneFn)
//      }
//    };
//  })
  .controller('madlibs', [
    '$scope', '$timeout',
    function ($scope, $timeout) {
      $scope.blanks = {};

      $scope.spaceify = function (snakeCaseName) {
        return snakeCaseName.replace(/_/g, ' ');
      };

      $scope.ml = function (blankName) {
        return this.blanks[blankName] || '{{' + this.spaceify(blankName) + '}}';
      };

      $scope.reset = function () {
        // delay until story is hidden
        $timeout(() => { this.blanks = {}; }, 500);
        this.prefs = { gender: 'O' };
        [].forEach.call(arguments, (form) => { form.$setPristine(); });
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

      $scope.reset();
    }]);
