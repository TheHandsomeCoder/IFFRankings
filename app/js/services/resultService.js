angular.module('RankingsApp')
    .factory('Result', function(Extender, Restangular) {

        function Result() {

        }

        Result.prototype.extended = function() {
            return true;
        }

        Result.extend = Extender.for(Result);

        return Result;
    });