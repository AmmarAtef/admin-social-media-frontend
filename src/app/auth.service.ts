export class AuthService {
  loggedIn:boolean = true;

  logIn() {
    this.loggedIn = true;
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  logOut() {
    this.loggedIn = false;
  }

}
