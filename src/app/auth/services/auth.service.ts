import { Injectable }   from '@angular/core';
import { 
  Http, 
  Response, 
  Headers 
}                       from '@angular/http';
import * as jwt_decode  from 'jwt-decode';
import LoginUser        from '../models/login-user.model';


export const TOKEN_NAME: string = 'auth_token';

/**
 * Auth Service
 * 
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {

  /**
   * Get Token String
   * 
   * @returns {string} 
   * @memberof AuthService
   */
  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  /**
   * Remove Token String
   * 
   * @returns {string} 
   * @memberof AuthService
   */
  removeToken(): boolean {
    if(this.getToken()) {
      localStorage.removeItem(TOKEN_NAME);
    }
    return true;
  }

  /**
   * Set JWT token in local storage
   * 
   * @param {string} token 
   * @memberof AuthService
   */
  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  /**
   * Get token expiration date
   * 
   * @param {string} token 
   * @returns {Date} 
   * @memberof AuthService
   */
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  /**
   * Is token expired
   * 
   * @param {string} [token] 
   * @returns {boolean} 
   * @memberof AuthService
   */
  isTokenExpired(token?: string): boolean {
    if(!token) {
      token = this.getToken();
    }

    if(!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  /**
   * Login response adapter
   * 
   * @static
   * @param {*} response 
   * @returns 
   * @memberof AuthService
   */
  static loginAdapter(response: any) {
    const token   = response.token;
    const decoded = jwt_decode(token);
    const userObj = {
      first_name:   decoded.first_name || '',
      last_name:    decoded.last_name || '',
      email:        decoded.email || '',
      avatar:       decoded.picture || ''
    }

    // Set the token in local storage
    localStorage.setItem(TOKEN_NAME, token);

    return {
      token,
      user: new LoginUser(userObj)
    }
  }
}