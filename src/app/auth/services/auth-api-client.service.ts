import { Injectable }     from '@angular/core';
import {
  HttpService,
  POST,
  Path,
  Body,
  Adapter,
  MediaType,
  Produces
}                         from '../../shared/asyncServices/http';
import { Observable }     from 'rxjs';
import { AuthService }    from './auth.service';
import LoginForm          from '../models/login-form.model';
import { RegisterForm } from '../models/register-form.model';

/**
 * Auth API client service
 * 
 * @export
 * @class AuthApiClient
 * @extends {HttpService}
 */
@Injectable()
export class AuthApiClient extends HttpService {

  /**
   * Login user route
   * 
   * @param {LoginForm} form 
   * @returns {Observable<any>} 
   * @memberof AuthApiClient
   */
  @POST("auth/login")
  @Adapter(AuthService.loginAdapter)
  @Produces(MediaType.FORM_DATA)
  public login(@Body form: LoginForm): Observable<any> { return null; };

  /**
   * Register user route
   * 
   * @param {RegisterForm} form 
   * @returns {Observable<any>} 
   * @memberof AuthApiClient
   */
  @POST("auth/register")
  @Produces(MediaType.FORM_DATA)
  public register(@Body form: RegisterForm): Observable<any> { return null; };
  
}