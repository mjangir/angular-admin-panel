import { Injectable }     from '@angular/core';
import {
  HttpService,
  POST,
  Path,
  Adapter
}                         from '../../shared/asyncServices/http';
import { Observable }     from 'rxjs/Observable';
import { AuthService }    from './auth.service';

@Injectable()
export class AuthApiClient extends HttpService {

  /**
   * Login user
   */
  @POST("/users.php")
  @Adapter(AuthService.authAdapter)
  public login(): Observable<any> { return null; };

  /**
   * Register user
   */
  @POST("/users.php")
  @Adapter(AuthService.authAdapter)
  public register(): Observable<any> { return null; };

  /**
   * Forgot Password
   */
  @POST("/users.php")
  @Adapter(AuthService.authAdapter)
  public forgot(): Observable<any> { return null; };

  
}