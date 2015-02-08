"use strict"

angular.module('RankingsApp')
.factory('Fencer', function(Extender, Restangular) {

 function Fencer(model) {

    angular.extend(this, model);
    var self = this;
    
};

Fencer.prototype = {
    Extended: function() {
        return true;
    },
    Results: function(results) {
        if (results) {
            angular.extend(this, {
                'results': results
            });
        }
        return this.results;
    },
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

return Fencer;
});