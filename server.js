
var fortune = require('fortune')
  , express = fortune.express
  , path = require("path");


var container = express()
  , port = 3000;


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
    results: ['result']
})

.resource('result', {        
        placing: Number,
        points: Number,
        competition: 'competition',
        fencer:'fencer',
        weapon:'weapon'
});

.resource('season', { 
        shortName: 'string',       
        competition: 'competition',
        result:'result'
});

.resource('weapon', {
  name: "string",
  shortName: "string",
})


container
  .use(rankingsAPI.router)
  .use(express.static(path.join(__dirname, 'app')))
  .listen(port);
// var app = express();

// app.configure(function () {
//   app.set('port', process.env.PORT || 3000);
//   app.use(express.logger('dev'));
//   app.use(express.bodyParser()),
//   app.use(express.static(path.join(__dirname, 'app')));
// });



console.log('Server listening on port ' + container.get('port'));