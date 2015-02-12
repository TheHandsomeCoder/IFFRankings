"use strict"

angular.module('RankingsApp')
    .factory('Season', function(Extender, Restangular) {

        function Season() {

        }

        Season.prototype.extended = function() {
            return true;
        };

        Season.prototype.init = function()
        {

        };

        Season.prototype.displayName = function()
        {
            return this.startYear + '/' + this.endYear; 
        };

        Season.prototype.Code = function()
        {
            return this.startYear + '/' + this.endYear;
        };

        Season.extend = Extender.for(Season);

        return Season;
    });
