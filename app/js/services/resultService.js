angular.module('RankingsApp')
    .factory('Result', function(Extender, Restangular, $rootScope) {




        function Result(model) {

            angular.extend(this, model);
            var self = this;
            Restangular.one('fencers', self.links.fencer).get().then(function(response) {
                self.Fencer(response);
            });
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
            }
        };

        return Result;
    });
