"use strict";

angular.module('RankingsApp')
.directive('fencerModal', function()
{
  return {
    restrict: 'E',
    scope: {
        fencer: '=fencer',
        fencers: '=fencers',
        edit: '@',
        text: '@',
        class:'@'
    },
    replace: true,
    transclude: true,
    template: '<a class="button {{class}}" ng-click="openFencerModel()">{{text}} <ng-transclude></ng-transclude></a>',
    controller: function($scope, $element, $modal)
    {

        $scope.openFencerModel = function() {       

            var modalInstance = $modal.open({
                templateUrl: 'js/directives/fencerModal/views/fencerModalView.html',
                controller: 'FencerModalCtrl',
                windowClass: 'small',
                resolve: {
                    edit: function () {return $scope.edit},
                    fencer: function(){return $scope.fencer},                  
                    fencers: function(){return $scope.fencers}                  
                }
            });     
        };
    }
};
});