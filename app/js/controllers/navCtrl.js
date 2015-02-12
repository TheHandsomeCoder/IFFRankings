"use strict";

angular.module('RankingsApp')
    .controller('NavigationBarController', function($scope, Restangular, CategoriesService, $route) {
        Restangular.all('competitions').getList().then(function(competitions) {
            $scope.competitions = competitions;
        });

        $scope.selectedWeapon = CategoriesService.selectedWeapon;
        $scope.weaponCatagories = CategoriesService.weaponCategories();


        $scope.changedValue = function(val)
        {
        	CategoriesService.selectedWeapon = val;
        	$route.reload();
        }
    });
