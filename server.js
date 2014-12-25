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
    firstname: String,
    lastname: String,
    gender: String,
    club: String,
    results: ['result']
})

.resource('competition', {
    name: String,
    shortName: String,
    results: ['result'],
    seasons: ['season']
})

.resource('result', {
    placing: Number,
    points: Number,
    competition: 'competition',
    fencer: 'fencer',
    weapon: 'weapon',
    season: 'season'
})

.resource('season', {
    startYear: Number,
    endYear: Number,
    competitions:['competition']  
})

.resource('weapon', {
    name: String,
    shortName: String
});


container
    .use(rankingsAPI.router)
    .use(express.static(path.join(__dirname, 'app')))
    .listen(port);

console.log('Server listening on port ' + port);
