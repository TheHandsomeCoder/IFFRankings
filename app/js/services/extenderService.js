angular.module('RankingsApp')
    .service('Extender', function() {
        this.extendResult = function(result, constructor) {

            var callArgs = arguments;
            var constructorArgs = Array.prototype.slice.call(callArgs, 2);

             var Temp = function() {};
             Temp.prototype = constructor.prototype;
             var inst = new Temp;

            // var model = constructor.apply(inst, constructorArgs);

            inst = angular.extend(inst, result);
            return inst;
        }

        this.processResponse = function(response, constructor) {
            var __this = this;
            if (angular.isArray(response)) {
                var models = [];
                angular.forEach(response, function(object) {
                    models.push(__this.extendResult(object, constructor));
                });
                return angular.extend(response, models);
            } else {
                return this.extendResult(response, constructor);
            }
        }

        this.for = function(constructor) {
            var __this = this;
            return function(response) {
                return __this.processResponse(response, constructor)
            };
        }
    });
