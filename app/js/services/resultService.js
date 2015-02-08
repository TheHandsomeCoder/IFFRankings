angular.module('RankingsApp')
    .factory('Result', function(Extender, Restangular, $rootScope) {




        function Result(model) {

            angular.extend(this, model);
            var self = this;
            if (self.fromServer) {
                Restangular.one('fencers', self.links.fencer).get().then(function(response) {
                    self.Fencer(response);
                });
            }
        };

        Result.prototype = {
            Extended: function() {
                return true;
            },
            Fencer: function(fencer) {
                if (fencer) {
                    angular.extend(this, {
                        'fencer': fencer
                    });
                }
                return this.fencer;
            },
            Points: function(points) {
                if (points) {
                    angular.extend(this, {
                        'points': points
                    });
                }
                return this.points;
            }

        };

        return Result;
    });
