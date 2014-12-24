"use strict";

angular.module('RankingsApp')
.directive('settingsModal', function()
{
  return {
    restrict: 'E',
    scope: {

    },
    replace: true,
    transclude: true,
    template: '<a ng-click="openModel()"><ng-transclude></ng-transclude></a>',
    controller: function($scope, $element, $modal)
    {

        $scope.openModel = function() {       

            $modal.open({
                templateUrl: 'js/directives/settingsModal/view/settingsModalView.html',
                controller: 'SettingsModalController',
                windowClass: 'medium settings-modal', 
                backdrop: 'static'

            });     
        };
    }
};
});