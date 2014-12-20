"use strict";

angular.module('RankingsApp', [
        'ngRoute',
        'mm.foundation',
        'ngRoute',
        'ngResource',
        'restangular'
    ])
    .config(['$routeProvider', 'RestangularProvider',  function($routeProvider, RestangularProvider) {
        $routeProvider
            .when('/competition/:competitionID', {
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
    .run(['Restangular', 'Competition', 'Fencer', 'Result', function(Restangular, Competition, Fencer, Result) {

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
            var x = Result.extend(model);
            x.init();
            return x;
        });
    }]);
