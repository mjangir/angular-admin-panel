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
import { Observable }     from 'rxjs/Observable';
import { AuthService }    from './auth.service';
import LoginForm          from '../models/login-form.model';

@Injectable()
export class AuthApiClient extends HttpService {

  /**
   * Login user
   */
  @POST("auth/login")
  @Adapter(AuthService.loginAdapter)
  @Produces(MediaType.FORM_DATA)
  public login(@Body form: LoginForm): Observable<any> { return null; };

  /**
   * Register user
   */
  @POST("/users.php")
  @Adapter(AuthService.registerAdapter)
  public register(): Observable<any> { return null; };

  /**
   * Forgot Password
   */
  @POST("/users.php")
  @Adapter(AuthService.forgotAdapter)
  public forgot(): Observable<any> { return null; };

  
}