var tmApp = angular.module('tmApp', [ 'tmControllers', 'ui.bootstrap' ]);

var tmControllers = angular.module('tmControllers', []);

tmControllers.controller('projectCtrl', [ '$scope',
		function($scope) {
		
			$scope.projects = [
				{name: 'Project A', percent: 0},
				{name: 'Project B', percent: 0},
				{name: 'Project C', percent: 0}
			];
			
			$scope.toHours = function(percent) {
				return 80 * percent / 100;
			}
			
			
}]);