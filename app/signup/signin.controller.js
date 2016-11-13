class SignInCtrl {
  constructor(signinSvc) {
    this.signinSvc = signinSvc;
    this.email = '';
    this.password = '';
  }

  getState() {
    return this.signinSvc.getState();
  }

  signIn(email, password) {
    this.signinSvc.signIn(email, password);
  }

  register(email, password) {
    this.signinSvc.register(email, password)
  }

  signOut() {
    this.signinSvc.signOut();
    this.cartSvc.cart.length = 0;
  }
}

SignInCtrl.$inject = ['SignInService'];

export default SignInCtrl;
