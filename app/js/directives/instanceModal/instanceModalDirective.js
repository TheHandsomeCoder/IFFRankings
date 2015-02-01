"use strict";

angular.module('RankingsApp')
    .directive('instanceModal', function() {
        return {
            restrict: 'E',
            scope: {
                competition: '=competition',
                instances: '=instances',
                class: '@'
            },
            replace: true,
            transclude: true,
            template: '<a class="button {{class}}" ng-click="openInstanceModel()"><ng-transclude></ng-transclude></a>',
            controller: function($scope, $element, $modal) {

                $scope.openInstanceModel = function() {

                    var modalInstance = $modal.open({
                        templateUrl: 'js/directives/instanceModal/views/instanceModalView.html',
                        controller: 'InstanceModalController',
                        windowClass: 'small',
                        resolve: {
                            competition: function() {
                                return $scope.competition
                            },

                        }
                    });

                    modalInstance.result.then(function(instance) {
                        $scope.instances.push(instance);
                    });
                };
            }
        };
    });
