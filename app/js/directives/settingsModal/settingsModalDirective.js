"use strict";

angular.module('RankingsApp')
    .directive('settingsModal', function() {
        return {
            restrict: 'E',
            scope: {
                competitions: '='
            },
            replace: true,
            transclude: true,
            template: '<a ng-click="openModel()"><ng-transclude></ng-transclude></a>',
            controller: function($scope, $element, $modal, $route) {

                $scope.openModel = function() {

                    var modalInstance = $modal.open({
                        templateUrl: 'js/directives/settingsModal/view/settingsModalView.html',
                        controller: 'SettingsModalController',
                        windowClass: 'medium settings-modal',
                        backdrop: 'static',
                        resolve: {
                            competitions: function() {
                                return $scope.competitions
                            }

                        }

                    });

                    modalInstance.result.then(function(comps) {
                        angular.copy(comps,$scope.competitions);
                        $route.reload();
                    });
                };
            }
        };
    });
