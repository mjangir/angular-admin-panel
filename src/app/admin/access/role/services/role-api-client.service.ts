import { Injectable }     from '@angular/core';
import {
  HttpService,
  GET,
  POST,
  PUT,
  DELETE,
  Path,
  Adapter,
  Produces,
  MediaType,
  Body
}                         from '../../../../shared/asyncServices/http';
import { Observable }     from 'rxjs/Observable';
import { RoleService }    from './role.service';
import RoleForm           from '../models/role-form.model';

@Injectable()
export class RoleApiClient extends HttpService {

  /**
   * Retrieves all roles
   */
  @GET("roles")
  @Adapter(RoleService.gridAdapter)
  public all(): Observable<any> { return null; };

  /**
   * Get role by ID
   */
  @GET("roles/{id}")
  @Adapter(RoleService.roleDetailsAdapter)
  public get(@Path("id") id: number): Observable<any> { return null; };

  /**
   * Create new role
   */
  @POST("roles")
  @Adapter(RoleService.createRoleAdapter)
  @Produces(MediaType.FORM_DATA)
  public create(@Body form: RoleForm): Observable<any> { return null; };

  /**
   * Update new role
   */
  @PUT("roles/{id}")
  @Adapter(RoleService.createRoleAdapter)
  @Produces(MediaType.FORM_DATA)
  public update(@Body form: RoleForm, @Path("id") id: number): Observable<any> { return null; };

  /**
   * Delete role by ID
   */
  @DELETE("roles/{id}")
  @Adapter(RoleService.roleDetailsAdapter)
  public deleteRecord(@Path("id") id: number): Observable<any> { return null; };

  /**
   * Delete role by ID
   */
  @POST("roles/delete-all")
  @Produces(MediaType.FORM_DATA)
  @Adapter(RoleService.roleDetailsAdapter)
  public deleteMultipleRecords(@Body ids: {ids: Array<number>}): Observable<any> { return null; };
}