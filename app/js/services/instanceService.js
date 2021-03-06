angular.module('RankingsApp')
.factory('Instance', function(Extender, Restangular) {

	var _season;

	function Instance(model) {

		angular.extend(this, model);
		var self = this;
		
		Restangular.one('seasons', self.links.season).get().then(function(response) {
			self.Season(response);
		});

	}

	Instance.prototype = {
		Extended: function() {
			return true;
		},
		Season: function(season) {
			if (season) {
				angular.extend(this, {
					'_season': season
				});
			}
			return this._season;
		}
	};

	return Instance;
});
