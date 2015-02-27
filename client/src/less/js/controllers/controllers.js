'use strict';

/* Controller */

app
	.controller('testCtrl',['$scope', '$http','$location',
		function($scope, $http, $location){
		var _scope = {};
		_scope.init = function(){
      $scope.status = 'new';
      $scope.error = false;
			$scope.itemList = [{
                          "number":100,
                          "name":'Test1'
                        },
                        {
                          "number":101,
                          "name":'Test2'
                        },
                        {
                          "number":102,
                          "name":'Test3'
                        }];

		}

    $scope.save = function(attribute){
    	//score result status
      if(attribute == undefined)
        $scope.error = true;
      else {
        $scope.attribute.id = 1;
        $scope.status = 'view';
        $scope.error = false;
      } 
    }

    $scope.back = function(){
      $scope.status = 'new';
      $location.path('/');
      $scope.attribute = undefined;
    }


    _scope.init();
	}]);