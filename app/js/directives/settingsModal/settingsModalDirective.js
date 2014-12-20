"use strict";

angular.module('RankingsApp')
.directive('settingsModal', function()
{
  return {
    restrict: 'E',
    scope: {
       
    },
    replace: true,
    controller: function($scope, $element, $modal)
    {
        $scope.openFencerModel = function() {       

            var modalInstance = $modal.open({
                templateUrl: 'js/directives/settingsModal/views/settingModalView.html',
                controller: 'FencerModalCtrl',
                windowClass: 'small'                
            });     
        };
    }
};
});