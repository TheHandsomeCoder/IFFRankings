angular.module('RankingsApp')
    .controller('SettingsModalController', function($scope, $modalInstance, Restangular) {


        $scope.processFile = function($fileContent) {
            if (true) //Replace this with JSON Schema Validation
            {
                $scope.content = angular.fromJson($fileContent);
            }
        };

        $scope.cancel = function() {
            $modalInstance.close();
        };

    });
