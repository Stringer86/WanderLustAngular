class SignInService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
    this.isLoggedIn = false;
  }

  getState() {
    return this.isLoggedIn;
  }

  signIn(email, password) {
    return this.$http.post('/api/token', { email, password })
        .then((response) => {
          Materialize.toast('Signed in!', 4000, 'green rounded');
          this.isLoggedIn = true;
          this.$state.go('profile');

          return response.data;
        })
        .catch((err) => {
          Materialize.toast(`${err.data}`, 4000, 'red rounded');
        });
  }

  register(email, password) {
    return this.$http.post('/api/users', { email, password })
      .then((response) => {
        Materialize.toast(`You are now signed up!`, 4000, 'blue rounded');
        this.$state.go('profile');

        return response.data;
      })
      .catch((err) => {
        Materialize.toast(`${err.data}`, 4000, 'red rounded');
      });
  }

  signOut() {
    return this.$http.delete('/api/token')
      .then((response) => {
        Materialize.toast('successfully logged out', 4000, 'red rounded');
        this.isLoggedIn = false;

        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

SignInService.$inject = ['$http', '$state'];

export default SignInService;
