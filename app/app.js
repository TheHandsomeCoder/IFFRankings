"use strict";

angular.module('RankingsApp', [
        'ngRoute',
        'mm.foundation',
        'ngRoute',
        'ngResource',
        'restangular'

    ])
    .config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
        $routeProvider
            .when('/competition/:competitionID', {
                templateUrl: 'views/competition.html',
                controller: 'CompetitionController'
            })
            .when('/competition/:competitionID/instance/:instanceID', {
                templateUrl: 'views/competition.html',
                controller: 'CompetitionController'
            })
            .when('/rankings', {
                redirectTo: '/'
            })
            .when('/', {
                templateUrl: 'views/rankings.html'
            })
            .when('/fencers', {
                templateUrl: 'views/fencers.html',
                controller: 'FencerController'
            })
            .otherwise({
                redirectTo: '/'
            });

        RestangularProvider.setBaseUrl('http://localhost:3000/');


        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            var extractedData;
            // .. to look for getList operations
            if (operation === "getList") {
                // .. and handle the data and meta data
                extractedData = data[what];
            } else if (operation === "get" || operation === "post" || operation === "put") {
                extractedData = data[what][0];
            } else {
                extractedData = data;
            }
            return extractedData;
        });

        RestangularProvider.addRequestInterceptor(function(element, operation, what, url) {
            var payload = {};
            payload[what] = [];
            // .. to look for getList operations
            if (operation === "post" || operation === "put") {
                // .. and handle the data and meta data
                payload[what].push(element);
            } else {
                payload = element;
            }
            return payload;
        });

    }])
    .run(['Restangular', 'Competition', 'Fencer', 'Result', 'Season', 'Tier', 'Instance', function(Restangular, Competition, Fencer, Result, Season, Tier, Instance) {

        Restangular.extendModel('competitions', function(model) {
            var x = Competition.extend(model);
            x.init();
            return x;

        });

        Restangular.extendModel('fencers', function(model) {
            var x = Fencer.extend(model);
            x.init();
            return x;
        });

        Restangular.extendModel('results', function(model) {
            var result = new Result(model);
            result.init();
            return result;
        });

        Restangular.extendModel('seasons', function(model) {
            var x = Season.extend(model);
            return x;
        });

        Restangular.extendModel('tiers', function(model) {
            var x = Tier.extend(model);
            return x;
        });

        Restangular.extendModel('instances', function(model) {
            var x = Instance.extend(model);
            if (x.fromServer) {
                x.init();
            }
            return x;
        });
    }]);
