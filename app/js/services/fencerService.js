angular.module('RankingsApp')
    .factory('Fencer', function(Extender, Restangular) {

        function Fencer() {

        }

        Fencer.prototype.extended = function() {
            return true;
        }

        Fencer.prototype.fullName = function(){
            return this.firstname + ' ' + this.lastname; 
        }

        Fencer.extend = Extender.for(Fencer);

        return Fencer;
    });