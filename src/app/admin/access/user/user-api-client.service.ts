import { Injectable }     from '@angular/core';
import {
  HttpService,
  GET,
  POST,
  PUT,
  DELETE,
  Path,
  Adapter
}                         from '../../../shared/asyncServices/http';
import { Observable }     from 'rxjs/Observable';
import { UserService }    from './user.service';

@Injectable()
export class UserApiClient extends HttpService {

  /**
   * Retrieves all users
   */
  @GET("users")
  @Adapter(UserService.gridAdapter)
  public all(): Observable<any> { return null; };

  /**
   * Retrieves user details by a given id
   * 
   * @param id
   */
  @GET("/users/{id}")
  @Adapter(UserService.userDetailsAdapter)
  public get(@Path("id") id: number): Observable<any> { return null; };

  /**
   * Create New User
   */
  @POST("/users")
  @Adapter(UserService.userDetailsAdapter)
  public create(): Observable<any> { return null; };

  /**
   * Update user details by a given id
   * 
   * @param id
   */
  @PUT("/users/{id}")
  @Adapter(UserService.userDetailsAdapter)
  public update(@Path("id") id: number): Observable<any> { return null; };

  /**
   * Delete user details by a given id
   * 
   * @param id
   */
  @DELETE("/users/{id}")
  @Adapter(UserService.userDetailsAdapter)
  public delete(@Path("id") id: number): Observable<any> { return null; };
}