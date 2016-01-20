var app = angular.module('mealtrack.services.authentication', []);

app.service('AuthService', function ($q, $ionicPopup) {
	var self = {
		user: Parse.User.current(),
		login: function (email, password) {
			var d = $q.defer();

			//LOGIN WITH PARSE
			Parse.User.logIn(email, password,{
				success: function(user){
					console.log('Logged In');
					self.user = user;
					d.resolve(self.user);
				},
				error: function(user,error){
					$ionicPopup.alert({
						title: 'Login error',
						subTitle: error.message
					});
					d.reject(error);
				}
			});
			//TODO

			return d.promise;
		},
		signup: function (name, email, password) {
			var d = $q.defer();

			//CREATING PARSE User
			var user = new Parse.User();
			user.set('username',email);
			user.set('name',name);
			user.set('password',password);
			user.set('email',email);

			//SIGNING UP THE User
			user.signUp(null,{
				success: function(user){
					console.log('Account created');
					self.user = user;
					d.resolve(self.user);
				},
				error: function(user,error){
					$ionicPopup.alert({
						title: 'SignUp error',
						subTitle: error.message
					});
					d.reject(error);
				}
			});

			//TODO

			return d.promise;
		},
		'update': function (data)  {
			var d = $q.defer();

			var user = self.user;
			user.set("username",data.email);
			user.set("name",data.name);
			user.set("email",data.email);

			user.save(null,{
				success: function(user){
					console.log('Account updated');
					self.user = user;
					d.resolve(self.user);
				},
				error: function(user,error){
					$ionicPopup.alert({
						title: 'Update error',
						subTitle: error.message
					});
					d.reject(error);
				}
			});

			//TODO

			return d.promise;
		}

	};

	return self;
})
;
