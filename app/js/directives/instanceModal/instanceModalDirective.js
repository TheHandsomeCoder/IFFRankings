"use strict";

angular.module('RankingsApp')
    .directive('instanceModal', function() {
        return {
            restrict: 'E',
            scope: {
                competition: '=competition',
                instances: '=instances',
                instance: '=instance',
                edit: "=edit",
                class: '@'
            },
            replace: true,
            transclude: true,
            template: '<a class="button {{class}}" ng-click="openInstanceModel()"><ng-transclude></ng-transclude></a>',
            controller: function($scope, $element, $modal, $route) {

                $scope.openInstanceModel = function() {

                    var modalInstance = $modal.open({
                        templateUrl: 'js/directives/instanceModal/views/instanceModalView.html',
                        controller: 'InstanceModalController',
                        windowClass: 'small',
                        resolve: {
                            competition: function() {return $scope.competition},
                            instance: function(){return angular.copy($scope.instance)},
                            edit: function(){return $scope.edit}
                        }
                    });

                    modalInstance.result.then(function(instance) {
                        if($scope.edit)
                        {
                            $route.reload();
                        }
                        else
                        {
                            $scope.instances.push(instance);
                        }
                    });
                };
            }
        };
    });
