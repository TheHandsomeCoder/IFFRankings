angular.module('RankingsApp')
.directive('fencerModal', function()
{
  return {
    restrict: 'A',
    scope: {
        fencer: '=fencer',
        edit: '@',
        text: '@',
        class:'@'
    },
    replace: true,
    template: '<a class="button {{class}}" ng-click="openFencerModel()"> {{text}} </a>',
    controller: function($scope, $element, $modal)
    {

        $scope.openFencerModel = function() {       

            var modalInstance = $modal.open({
                templateUrl: 'js/directives/fencerModal/views/fencerModalView.html',
                controller: 'fencerModalCtrl',
                windowClass: 'small',
                resolve: {
                    edit: function () {return $scope.edit},
                    fencer: function(){return $scope.fencer}                   
                }
            });     
        }
    }
}
});