angular.module('RankingsApp')
    .service('CategoriesService', function() {

            this.numberOfCompetitorsCategories = function() {
                return [{
                    'displayName': '128+',
                    "code": "128+",
                    'max': 9999
                }, {
                    'displayName': '65 - 128',
                    'code': '65-128',
                    'max': 128
                }, {
                    'displayName': '33 - 64',
                    'code': '33-64',
                    'max': 64
                }, {
                    'displayName': '17 - 32',
                    'code': '17-32',
                    'max': 32
                }, {
                    'displayName': '9 - 16',
                    'code': '9-16',
                    'max': 16
                }, {
                    'displayName': '5 - 8',
                    'code': '5-8',
                    'max': 8
                }, {
                    'displayName': '2 - 4',
                    'code': '2-4',
                    'max': 4
                } ];
            };

            this.weaponCategories = function() {
                return [{
                    'displayName': "Men's Epee",
                    'code': 'ME'
                }, {
                    'displayName': "Womens's Epee",
                    'code': 'WE'
                }, {
                    'displayName': "Men's Foil",
                    'code': 'MF'
                }, {
                    'displayName': "Womens's Foil",
                    'code': 'WF'
                }, {
                    'displayName': "Men's Sabre",
                    'code': 'MS'
                }, {
                    'displayName': "Womens's Sabre",
                    'code': 'WS'
                }];
            };

            this.pointsCategories = function() {
                return {
                    "C" : {

                        '128+': [71, 58, 47, 37, 27, 18, 11, 6, 3],
                        '65-128': [58, 47, 37, 27, 18, 11, 6, 3],
                        '33-64': [47, 37, 27, 18, 11, 6, 3],
                        '17-32': [37, 27, 18, 11, 6, 3],
                        '9-16': [27, 18, 11, 6, 3],
                        '5-8': [18, 11, 6, 3],
                        '2-4': [11, 6, 3]

                    },

                    "B": {},
                    "A": {},
                    "UK": {},
                    "SAT": {}

                };

            };

        this.competitionCategories = function() {
            return [{
                "displayName": "Satellite",
                "code": "SAT"
               
            }, {
                "displayName": "Tier A",
                "code": "A"
            
            }, {
                "displayName": "Tier C",
                "code": "C"
               
            }, {
                "displayName": "Tier B",
                "code": "B"
                
            }, {
                "displayName": "Selected UK",
                "code": "UK"
            }];
        };
    });
