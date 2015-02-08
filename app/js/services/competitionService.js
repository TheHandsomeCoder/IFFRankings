"use strict"

angular.module('RankingsApp')
    .factory('Competition', function(Extender, Restangular) {

        function Competition(model) {

            angular.extend(this, model);
            
        };

        Competition.prototype = {
            Extended: function() {
                return true;
            }
        };

        return Competition;
    });
