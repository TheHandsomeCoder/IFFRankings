angular.module('RankingsApp')
    .service('ResultsCalculator', function(CategoriesService) {


        this.calculatePoints = function(placing, instance) {
            if (!placing || !instance) {
                return;
            } else {
                var pointsCategories = CategoriesService.pointsCategories();

                var pointsForCompetitionTier = pointsCategories[instance.tier];
                
                var pointsForCompetitionTierAndNumberOfCompetitors = pointsForCompetitionTier[instance.numberOfCompetitors];

                return getPointsFromPointsArray(pointsForCompetitionTierAndNumberOfCompetitors, placing);
            }

        };

        function getPointsFromPointsArray(pointsArray, placing)
        {
        	if(placing === 1)
        	{
        		return pointsArray[0];
        	}
        	else if(placing === 2)
        	{
        		return pointsArray[1];
        	}
        	else if(placing === 3)
        	{
        		return pointsArray[2];
        	}
        	else if (placing > 3 && placing < 9)
        	{
        		return pointsArray[3];
        	}
        	else if (placing > 8 && placing < 17)
        	{
        		return pointsArray[4];
        	}
        	else if (placing > 16 && placing < 33)
        	{
        		return pointsArray[5];
        	}
        	else if (placing > 32 && placing < 65)
        	{
        		return pointsArray[6];
        	}
        	else if (placing > 64 && placing < 129)
        	{
        		return pointsArray[7];
        	}
        	else if (placing > 128)
        	{
        		return pointsArray[8];
        	}
        	else
        	{
        		console.log("error");
        	}
        }
    });
