angular.module('RankingsApp')
.service('competitions', function() {	

	var competitions = 
	[
		 {"id": 1, "name":"East of Ireland Open", "shortName":"EOI"}
		,{"id": 2, "name":"West of Ireland Open", "shortName":"WOI"}
		,{"id": 3, "name":"South of Ireland Open", "shortName":"SOI"}
		,{"id": 4, "name":"Northern Irish Open", "shortName":"NIO"}
	];
		
		this.getCompetitions = function () {
            return competitions;
        };

        this.getCompetition = function (id) {
        	
            return _.find(competitions, function(x){return x.id == id});
        };

        this.insertCompetition = function (competition) {
            competitions.push(competition);
        };



       
	
});


