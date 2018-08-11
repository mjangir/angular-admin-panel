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
import { Observable }     from 'rxjs';
import { PermissionService }    from './permission.service';
import PermissionForm           from '../models/permission-form.model';

@Injectable()
export class PermissionApiClient extends HttpService {

  /**
   * Retrieves all permissions
   */
  @GET("permissions")
  @Adapter(PermissionService.gridAdapter)
  public all(): Observable<any> { return null; };

  /**
   * Get permission by ID
   */
  @GET("permissions/{id}")
  @Adapter(PermissionService.permissionDetailsAdapter)
  public get(@Path("id") id: number): Observable<any> { return null; };

  /**
   * Create new permission
   */
  @POST("permissions")
  @Adapter(PermissionService.createPermissionAdapter)
  @Produces(MediaType.FORM_DATA)
  public create(@Body form: PermissionForm): Observable<any> { return null; };

  /**
   * Update new permission
   */
  @PUT("permissions/{id}")
  @Adapter(PermissionService.createPermissionAdapter)
  @Produces(MediaType.FORM_DATA)
  public update(@Body form: PermissionForm, @Path("id") id: number): Observable<any> { return null; };

  /**
   * Delete permission by ID
   */
  @DELETE("permissions/{id}")
  @Adapter(PermissionService.permissionDetailsAdapter)
  public deleteRecord(@Path("id") id: number): Observable<any> { return null; };

  /**
   * Delete permission by ID
   */
  @POST("permissions/delete-all")
  @Produces(MediaType.FORM_DATA)
  @Adapter(PermissionService.permissionDetailsAdapter)
  public deleteMultipleRecords(@Body ids: {ids: Array<number>}): Observable<any> { return null; };

  /**
   * Save permission
   * 
   * @param {any} form 
   * @returns 
   * @memberof PermissionApiClient
   */
  public savePermission(form) {
    if(!form.id) {
      return this.create(form);
    } else {
      return this.update(form, form.id)
    }
  }
}