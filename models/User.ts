export default class User {
  private email = '';
  private password = '';

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  setPassword(newPassword: string) {
    this.password = newPassword;
  }

  getPassword() {
    return this.password;
  }

  getEmail() {
    return this.email;
  }
}
