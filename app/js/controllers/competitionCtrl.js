'use strict';

angular.module('RankingsApp')
.controller('CompetitionCtrl', function ($scope, Competition,Fencer,Result, $routeParams) {

	$scope.competitionID = $routeParams.competitionID;
	

	competitions.getCompetition($routeParams.competitionID).then(function(competition) 
		{
	    	$scope.competition = competition;
	    	console.log($scope.competition);
	    }, 
	    function(error) 
	    {	             
	    	console.log("Nav Controller Error", error);
	    });

	
	$scope.fencers = fencers.getFencers();	
	
	
	$scope.getNextPlacing = function()
	{
		return placings += 1;
	}

	$scope.getFencerFromResult = function(result)
	{
		return fencers.getFencer(result.fencer);		
	}

	$scope.getCompFromResult = function(result)
	{
		return competitions.getCompetition(result.competition);		
	}	

	$scope.getResultsForCompetition = function(competitionID)
	{
		return results.getResultsForCompetition($routeParams.competitionID);	
	}

	var placings = $scope.getResultsForCompetition($scope.competitionID).length; 

	$scope.addNewResult = function()
	{
		var result = { "fencer": $scope.selectedFencer.id,  "competition":$routeParams.competitionID,  "placing": $scope.getNextPlacing(), "points":50 };
		results.insertResult(result);		
		$scope.selectedFencer = null;

	}

	





});