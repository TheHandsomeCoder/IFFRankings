angular.module('RankingsApp')
.service('fencers', function() {	


  // var Datastore = require('nedb')
  // , path = require('path')
  // , db = new Datastore({ filename: path.join(require('nw.gui').App.dataPath + '/db',  'fencers.db'),autoload: true, });
  var uid = 3;

  var fencers = [
  {
    "id": 0,
    "firstname": "Dale",
    "lastname": "Mason",
    "gender": "Male",
    "club": "Salle Zork"
  },
  {
    "id": 1,
    "firstname": "Tracie",
    "lastname": "Moody",
    "gender": "Female",
    "club": "Salle Mangelica"
  },
  {
    "id": 2,
    "firstname": "Wilda",
    "lastname": "Frank",
    "gender": "Female",
    "club": "Salle Wazzu"
  }
  // ,{
  //   "id": 3,
  //   "firstname": "Wilda",
  //   "lastname": "Casey",
  //   "gender": "Female",
  //   "club": "Salle Crustatia"
  // },
  // {
  //   "id": 4,
  //   "firstname": "Palmer",
  //   "lastname": "Norman",
  //   "gender": "Male",
  //   "club": "Salle Genekom"
  // },
  // {
  //   "id": 5,
  //   "firstname": "Erika",
  //   "lastname": "Grimes",
  //   "gender": "Female",
  //   "club": "Salle Geeky"
  // },
  // {
  //   "id": 6,
  //   "firstname": "Natalie",
  //   "lastname": "Haley",
  //   "gender": "Female",
  //   "club": "Salle Xanide"
  // },
  // {
  //   "id": 7,
  //   "firstname": "Santiago",
  //   "lastname": "Watts",
  //   "gender": "Male",
  //   "club": "Salle Insurity"
  // },
  // {
  //   "id": 8,
  //   "firstname": "Janis",
  //   "lastname": "Carney",
  //   "gender": "Female",
  //   "club": "Salle Jumpstack"
  // },
  // {
  //   "id": 9,
  //   "firstname": "Quinn",
  //   "lastname": "Trevino",
  //   "gender": "Male",
  //   "club": "Salle Tersanki"
  // },
  // {
  //   "id": 10,
  //   "firstname": "Liz",
  //   "lastname": "Strong",
  //   "gender": "Female",
  //   "club": "Salle Earthplex"
  // },
  // {
  //   "id": 11,
  //   "firstname": "Ross",
  //   "lastname": "Cotton",
  //   "gender": "Male",
  //   "club": "Salle Farmex"
  // },
  // {
  //   "id": 12,
  //   "firstname": "Monroe",
  //   "lastname": "Gibbs",
  //   "gender": "Male",
  //   "club": "Salle Isonus"
  // },
  // {
  //   "id": 13,
  //   "firstname": "Naomi",
  //   "lastname": "Hutchinson",
  //   "gender": "Female",
  //   "club": "Salle Geofarm"
  // },
  // {
  //   "id": 14,
  //   "firstname": "Madelyn",
  //   "lastname": "Lambert",
  //   "gender": "Female",
  //   "club": "Salle Dyno"
  // },
  // {
  //   "id": 15,
  //   "firstname": "Nona",
  //   "lastname": "Ratliff",
  //   "gender": "Female",
  //   "club": "Salle Digirang"
  // },
  // {
  //   "id": 16,
  //   "firstname": "Annie",
  //   "lastname": "Lawson",
  //   "gender": "Female",
  //   "club": "Salle Dogspa"
  // },
  // {
  //   "id": 17,
  //   "firstname": "Wilder",
  //   "lastname": "Henderson",
  //   "gender": "Male",
  //   "club": "Salle Flyboyz"
  // },
  // {
  //   "id": 18,
  //   "firstname": "Estelle",
  //   "lastname": "Monroe",
  //   "gender": "Female",
  //   "club": "Salle Eschoir"
  // },
  // {
  //   "id": 19,
  //   "firstname": "Wright",
  //   "lastname": "Pennington",
  //   "gender": "Male",
  //   "club": "Salle Austex"
  // },
  // {
  //   "id": 20,
  //   "firstname": "Levine",
  //   "lastname": "Madden",
  //   "gender": "Male",
  //   "club": "Salle Malathion"
  // },
  // {
  //   "id": 21,
  //   "firstname": "Jeanie",
  //   "lastname": "Reese",
  //   "gender": "Female",
  //   "club": "Salle Boink"
  // },
  // {
  //   "id": 22,
  //   "firstname": "Rios",
  //   "lastname": "Wade",
  //   "gender": "Male",
  //   "club": "Salle Cinesanct"
  // },
  // {
  //   "id": 23,
  //   "firstname": "Cecelia",
  //   "lastname": "Wolfe",
  //   "gender": "Female",
  //   "club": "Salle Voipa"
  // },
  // {
  //   "id": 24,
  //   "firstname": "Coffey",
  //   "lastname": "Love",
  //   "gender": "Male",
  //   "club": "Salle Bullzone"
  // },
  // {
  //   "id": 25,
  //   "firstname": "Strickland",
  //   "lastname": "Nelson",
  //   "gender": "Male",
  //   "club": "Salle Comtrail"
  // },
  // {
  //   "id": 26,
  //   "firstname": "Witt",
  //   "lastname": "Lott",
  //   "gender": "Male",
  //   "club": "Salle Glasstep"
  // },
  // {
  //   "id": 27,
  //   "firstname": "Peters",
  //   "lastname": "Payne",
  //   "gender": "Male",
  //   "club": "Salle Eweville"
  // },
  // {
  //   "id": 28,
  //   "firstname": "Lindsay",
  //   "lastname": "Petersen",
  //   "gender": "Female",
  //   "club": "Salle Techmania"
  // },
  // {
  //   "id": 29,
  //   "firstname": "Jami",
  //   "lastname": "Rowe",
  //   "gender": "Female",
  //   "club": "Salle Dognost"
  // },
  // {
  //   "id": 30,
  //   "firstname": "Greene",
  //   "lastname": "Sharp",
  //   "gender": "Male",
  //   "club": "Salle Flumbo"
  // },
  // {
  //   "id": 31,
  //   "firstname": "Randi",
  //   "lastname": "Bell",
  //   "gender": "Female",
  //   "club": "Salle Oulu"
  // },
  // {
  //   "id": 32,
  //   "firstname": "Baldwin",
  //   "lastname": "Murray",
  //   "gender": "Male",
  //   "club": "Salle Isodrive"
  // },
  // {
  //   "id": 33,
  //   "firstname": "Boyer",
  //   "lastname": "Horn",
  //   "gender": "Male",
  //   "club": "Salle Parcoe"
  // },
  // {
  //   "id": 34,
  //   "firstname": "Stout",
  //   "lastname": "Mitchell",
  //   "gender": "Male",
  //   "club": "Salle Securia"
  // },
  // {
  //   "id": 35,
  //   "firstname": "Gillespie",
  //   "lastname": "Benson",
  //   "gender": "Male",
  //   "club": "Salle Zorromop"
  // },
  // {
  //   "id": 36,
  //   "firstname": "Lowery",
  //   "lastname": "Mckinney",
  //   "gender": "Male",
  //   "club": "Salle Telpod"
  // },
  // {
  //   "id": 37,
  //   "firstname": "Janette",
  //   "lastname": "Kemp",
  //   "gender": "Female",
  //   "club": "Salle Neteria"
  // },
  // {
  //   "id": 38,
  //   "firstname": "Sharron",
  //   "lastname": "Yates",
  //   "gender": "Female",
  //   "club": "Salle Hatology"
  // },
  // {
  //   "id": 39,
  //   "firstname": "Solomon",
  //   "lastname": "Burgess",
  //   "gender": "Male",
  //   "club": "Salle Multron"
  // }
  ];

  this.getFencers = function () {
    return fencers;
  };

  this.getFencer = function (id) {
    return _.find(fencers, function(x){return x.id == id});
  };

  this.insertFencer = function (fencer) {
    fencer.id = uid++;
    fencers.push(fencer);
  };

  this.updateFencer = function(fencer){
    tempfencer = _.findWhere(fencers, {id: fencer.id});
    angular.extend(tempfencer, fencer);
  }

});


