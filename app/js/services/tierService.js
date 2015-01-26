"use strict"

angular.module('RankingsApp')
    .factory('Tier', function(Extender, Restangular) {

        function Tier() {

        }

        Tier.prototype.extended = function() {
            return true;
        };

        Tier.prototype.init = function()
        {

        };

        Tier.extend = Extender.for(Tier);

        return Tier;
    });
