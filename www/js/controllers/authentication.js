var app = angular.module('mealtrack.controllers.authentication', []);

/*********************************************************************
 * LoginCtrl
 *********************************************************************/
app.controller('LoginCtrl', function ($scope, $state, AuthService) {

	$scope.formData = {
		"email": "",
		"password": ""
	};

	$scope.login = function (form) {
		console.log("LoginCtrl::login");
		if (form.$valid) {
			AuthService.login($scope.formData.email, $scope.formData.password)
				.then(function(){
					$state.go("tab.meals");
				})
		}else{
			console.log("Error");
		}
		//TODO
	};

});

/*********************************************************************
 * SignupCtrl
 *********************************************************************/
app.controller('SignupCtrl', function ($scope, $state, AuthService) {

	$scope.formData = {
		"name": "",
		"email": "",
		"password": ""
	};

	$scope.signup = function (form) {
		console.log("SignupCtrl::signup");
		if (form.$valid) {
			console.log("Signing up");
			AuthService.signup($scope.formData.name,$scope.formData.email,$scope.formData.password)
		}else{
			console.log("Error");
		}
		//TODO
	};

});
