'use strict';

angular.module('RankingsApp', [
  'ngRoute',
  'mm.foundation',
  'ngRoute'
])
  .config(function ($routeProvider) {
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
  });
