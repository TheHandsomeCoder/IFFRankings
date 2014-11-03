angular.module('RankingsApp')
.service('results', function() {	
    var uid = 2;
    var results = [
    {
        "id":1,
        "fencer":1,
        "competition":1,
        "placing":1,
        "points":50
    }
    ];

    this.getResults = function()
    {
        return results;
    }

    this.getResultsForCompetition = function (_id) 
    {
        var resultsForCompetition = _.filter(results, function(x){ return x.competition == _id});

        return resultsForCompetition;
    };

    this.getResult = function (id) {
        return _.findWhere(results, {index: id});
    };

    this.insertResult = function (result) {
        result.id = uid++;
        results.push(result);
    };



});


