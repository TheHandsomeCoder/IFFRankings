angular.module('RankingsApp')
    .service('CategoriesService', function () {

        this.numberOfCompetitorsCategories = function () {
            return [
                {
                    'displayName': '128+',
                    "code": "128+",
                    'max': 9999
                },
                {
                    'displayName': '65 - 128',
                    'code': '65-128',
                    'max': 128
                },
                {
                    'displayName': '33 - 64',
                    'code': '33-64',
                    'max': 64
                },
                {
                    'displayName': '17 - 32',
                    'code': '17-32',
                    'max': 32
                },
                {
                    'displayName': '9 - 16',
                    'code': '9-16',
                    'max': 16
                },
                {
                    'displayName': '5 - 8',
                    'code': '5-8',
                    'max': 8
                },
                {
                    'displayName': '2 - 4',
                    'code': '2-4',
                    'max': 4
                }
            ];
        };

        this.weaponCategories = function () {
            return [
                {
                    'displayName': "Men's Epee",
                    'code': 'ME'
                },
                {
                    'displayName': "Womens's Epee",
                    'code': 'WE'
                },
                {
                    'displayName': "Men's Foil",
                    'code': 'MF'
                },
                {
                    'displayName': "Womens's Foil",
                    'code': 'WF'
                },
                {
                    'displayName': "Men's Sabre",
                    'code': 'MS'
                },
                {
                    'displayName': "Womens's Sabre",
                    'code': 'WS'
                }
            ];
        };

        this.pointsCategories = function (seasonCode) {

            if (seasonCode === "2014/2015") {
                return{
                    "C": {
                        '33-64': [46, 36, 23, 17, 10, 7, 3],
                        '17-32': [40, 26, 17, 10, 7, 3],
                        '9-16': [36, 23, 13, 7, 3],
                        '5-8': [26, 13, 7, 3],
                        '2-4': [13, 7, 3]
                    },

                    "B": {

                        '33-64': [70, 55, 35, 25, 15, 10, 5],
                        '17-32': [60, 40, 25, 15, 10, 5],
                        '9-16': [55, 35, 20, 10, 5],
                        '5-8': [40, 20, 10, 5],
                        '2-4': [20, 10, 5]

                    },
                    "A": {

                        '128+': [150, 115, 80, 68, 53, 30, 23, 15, 8],
                        '65-128': [120, 98, 68, 53, 30, 23, 15, 8],
                        '33-64': [105, 83, 53, 38, 23, 15, 8],
                        '17-32': [90, 60, 38, 23, 15, 8],
                        '9-16': [83, 53, 30, 15, 8],
                        '5-8': [60, 30, 15, 8]


                    },
                    "UK": {

                        '128+': [200, 155, 105, 82, 70, 40, 30, 20, 10],
                        '65-128': [160, 130, 82, 70, 40, 30, 20, 10],
                        '33-64': [140, 110, 70, 50, 30, 20, 10],
                        '17-32': [120, 80, 50, 30, 20, 10],
                        '9-16': [110, 70, 40, 20, 10],
                        '5-8': [80, 40, 20, 10]

                    },
                    "SAT": {

                        '128+': [300, 230, 160, 125, 105, 60, 45, 30, 15],
                        '65-128': [ 240, 195, 125, 105, 60, 45, 30, 15],
                        '33-64': [210, 165, 105, 75, 45, 30, 15],
                        '17-32': [180, 120, 75, 45, 30, 15],
                        '9-16': [165, 105, 60, 30, 15],
                        '5-8': [120, 60, 30, 15]

                    }}
            }
            else {
                return {
                    "C": {

                        '128+': [71, 58, 47, 37, 27, 18, 11, 6, 3],
                        '65-128': [58, 47, 37, 27, 18, 11, 6, 3],
                        '33-64': [47, 37, 27, 18, 11, 6, 3],
                        '17-32': [37, 27, 18, 11, 6, 3],
                        '9-16': [27, 18, 11, 6, 3],
                        '5-8': [18, 11, 6, 3],
                        '2-4': [11, 6, 3]

                    },

                    "B": {

                        '128+': [109, 89, 72, 56, 41, 28, 17, 9, 5],
                        '65-128': [89, 72, 56, 41, 28, 17, 9, 5],
                        '33-64': [72, 56, 41, 28, 17, 9, 5],
                        '17-32': [56, 41, 28, 17, 9, 5],
                        '9-16': [41, 28, 17, 9, 5],
                        '5-8': [28, 17, 9, 5],
                        '2-4': [17, 9, 5]

                    },
                    "A": {

                        '128+': [180, 146, 119, 93, 68, 46, 28, 15, 8],
                        '65-128': [146, 119, 93, 68, 46, 28, 15, 8],
                        '33-64': [119, 93, 68, 46, 28, 15, 8],
                        '17-32': [93, 68, 46, 28, 15, 8],
                        '9-16': [68, 46, 28, 15, 8],
                        '5-8': [46, 28, 15, 8],
                        '2-4': [28, 15, 8]

                    },
                    "UK": {

                        '128+': [230, 187, 152, 119, 87, 59, 36, 19, 10],
                        '65-128': [187, 152, 119, 87, 59, 36, 19, 10],
                        '33-64': [152, 119, 87, 59, 36, 19, 10],
                        '17-32': [119, 87, 59, 36, 19, 10],
                        '9-16': [87, 59, 36, 19, 10],
                        '5-8': [59, 36, 19, 10],
                        '2-4': [36, 19, 10]

                    },
                    "SAT": {

                        '128+': [336, 273, 222, 173, 127, 86, 52, 28, 15],
                        '65-128': [273, 222, 173, 127, 86, 52, 28, 15],
                        '33-64': [222, 173, 127, 86, 52, 28, 15],
                        '17-32': [173, 127, 86, 52, 28, 15],
                        '9-16': [127, 86, 52, 28, 15],
                        '5-8': [86, 52, 28, 15],
                        '2-4': [52, 28, 15]

                    }
                };
            }
        };

        this.competitionCategories = function () {
            return [
                {
                    "displayName": "Satellite",
                    "code": "SAT"

                },
                {
                    "displayName": "Tier A",
                    "code": "A"

                },
                {
                    "displayName": "Tier C",
                    "code": "C"

                },
                {
                    "displayName": "Tier B",
                    "code": "B"

                },
                {
                    "displayName": "Selected UK",
                    "code": "UK"
                }
            ];
        };
    });
