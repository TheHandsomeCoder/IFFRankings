angular.module('RankingsApp')
    .factory('Result', function(Extender, Restangular) {

    	  var _fencer;

        function Result() {

          
        }

        Result.prototype.extended = function() {
            return true;
        }


        Result.prototype.init = function() {
          
          Restangular.one('fencers', this.fencer).get().then(function(response){
            _fencer = response;
          })
        }

        Result.prototype.Fencer = function() 
        {
          
            return _fencer;
                     
        }


        Result.extend = Extender.for(Result);

        return Result;
    });