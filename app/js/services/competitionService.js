"use strict"

angular.module('RankingsApp')
    .factory('Competition', function(Extender, Restangular) {

        function Competition(model) {

            angular.extend(this, model);

        };

        Competition.prototype = {
            Extended: function() {
                return true;
            },
            Instance: function(instance) {
                if (instance) {
                    angular.extend(this, {
                        'instance': instance
                    });
                }
                return this.instance;
            }
        };

        return Competition;
    });
