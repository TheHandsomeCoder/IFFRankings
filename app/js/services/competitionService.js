angular.module('RankingsApp')
    .factory('Competition', function(Extender, Restangular) {

        function Competition() {

        }

        Competition.prototype.extended = function() {
            return true;
        }

        Competition.extend = Extender.for(Competition);

        return Competition;
    });
