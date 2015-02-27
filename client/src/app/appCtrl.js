app.controller('appCtrl', [ '$scope', '$http','$location','service', 'growl',
	function($scope, $http, $location, service,  growl){

		$scope.uploadfile = function(){
			service.post({url:'upload'}).$promise.then(function(data){
				$scope.sectionList = data;
			}).catch(function(error){
				growl.addErrorMessage('oops! Something went wrong');
			})
		}

		$scope.onFileSelect = function($files){
			$scope.file = $files[0].name; 
		}
	}]
)