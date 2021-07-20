import User from './User';

export default class Users {
  static users: User[] = [];

  static addUser(user: User) {
    Users.users.push(user);
  }

  static getUser(email: string) {
    return Users.users.find((u: User) => u.getEmail() === email);
  }

  static doesUserExist(email: string) {
    return Users.getUser(email) !== undefined;
  }
}
