"use strict"

angular.module('RankingsApp')
    .factory('Fencer', function(Extender, Restangular) {

        function Fencer() {

        }

        Fencer.prototype.extended = function() {
            return true;
        };

        Fencer.prototype.fullName = function(){
            return this.firstname + ' ' + this.lastname; 
        };

        Fencer.prototype.init = function() {};


        Fencer.extend = Extender.for(Fencer);

        return Fencer;
    });