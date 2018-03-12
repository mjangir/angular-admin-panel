import {
  Injectable,
  Inject,
  forwardRef
}               from '@angular/core';
import User from '../models/user.model';

@Injectable()
export class UserService {

  /**
   * Transforms grid data usres recieved from the API into array of 'User' instances
   *
   * @param users
   */
  static gridAdapter(users: any): Array<User> {
    return users.data ? users.data.map(user => new User(user)): [];
  }

  /**
   * Transforms user details recieved from the API into instance of 'User'
   *
   * @param user
   */
  static userDetailsAdapter(user: any): User {
    return new User(user);
  }
}