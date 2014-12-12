'use strict';

angular.module('RankingsApp', [
        'ngRoute',
        'mm.foundation',
        'ngRoute',
        'ngResource',
        'restangular'
    ])
    .config(['$routeProvider', 'RestangularProvider', 'CompetitionProvider', function($routeProvider, RestangularProvider, CompetitionProvider) {
        $routeProvider
            .when('/competition/:competitionID', {
                templateUrl: 'views/competition.html',
                controller: 'CompetitionCtrl'
            })
            .when('/rankings', {
                redirectTo: '/'
            })
            .when('/', {
                templateUrl: 'views/rankings.html'
            })
            .when('/fencers', {
                templateUrl: 'views/fencers.html',
                controller: 'FencerCtrl'
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
    .run(['Restangular', 'Competition', 'Fencer', 'Result', function(Restangular, Competition, Fencer, Result) {

        Restangular.extendModel('competitions', function(model) {
            return Competition.extend(model);
        });

        Restangular.extendModel('fencers', function(model) {
            return Fencer.extend(model);
        });

        Restangular.extendModel('results', function(model) {
            return Result.extend(model);
        });
    }]);
