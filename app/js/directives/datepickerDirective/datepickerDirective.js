angular.module('RankingsApp')
    .directive('datepicker', function() {

        return {
        	restrict: 'A',
            link: function(scope, element, attrs) {
                $(element).fdatepicker()
            }
        }
    })
