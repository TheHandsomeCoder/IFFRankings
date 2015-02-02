angular.module('RankingsApp')
    .factory('Result', function(Extender, Restangular, $rootScope) {




        function Result(model) {
            
            angular.extend(this, model);
             Restangular.one('fencers', this.links.fencer).get().then(function(response) {
                this.fencer = response;
            });
        };

        Result.prototype.Extended = function() {
            return true;
        };

        Result.prototype.Fencer = function() {
            return this.fencer;
        };





        //Result.extend = Extender.for(Result);

        return Result;
    });
