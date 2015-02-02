angular.module('RankingsApp')
.factory('Instance', function(Extender, Restangular) {

 var _season;

 function Instance() {


 }

 Instance.prototype.extended = function() {
    return true;
}


Instance.prototype.init = function() {

    Restangular.one('seasons', this.links.season).get().then(function(response){
    _season = response;
})
}

Instance.prototype.Season = function() 
{          
    return _season;                     
}

Instance.extend = Extender.for(Instance);

return Instance;
});