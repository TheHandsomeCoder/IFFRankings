"use strict";

var fortune = require('fortune'),
    express = fortune.express,
    path = require("path");


var container = express(),
    port = 3000;


var rankingsAPI = fortune({
    db: 'rankings',
    path: './data/'
})

.resource('fencer', {
    firstName: String,
    lastName: String,
    gender: String,
    club: String,
    results: ['result']
})

.resource('competition', {
    name: String,
    shortName: String,
    results: ['result'],
    instances: ['instance']
})

.resource('result', {
    placing: Number,
    instance: 'instance',
    fencer: 'fencer',
    weapon: 'weapon', 
    points: Number   
})

.resource('season', {
    startYear: Number,
    endYear: Number    
})

.resource('instance',{
    competition: 'competition',
    weapon: 'weapon',
    date: Date,
    season: 'season',
    results: ['result'],
    tier: String,
    numberOfCompetitors:String
});



container
    .use(rankingsAPI.router)
    .use(express.static(path.join(__dirname, 'app')))
    .listen(port, 'localhost');

console.log('Server listening on port ' + port);
