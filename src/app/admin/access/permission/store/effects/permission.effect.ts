import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { PermissionApiClient } from "../../services/permission-api-client.service";
import PermissionForm from "../../models/permission-form.model";
import * as loadPermissionsActions from '../actions/load-permissions.action';
import * as viewPermissionActions from '../actions/view-permission.action';
import * as deletePermissionActions from '../actions/delete-permission.action';
import * as savePermissionActions from '../actions/save-permission.action';
import Permission from "../../models/permission.model";

/**
 * Access permission effects
 *
 * @export
 * @class AccessPermissionEffects
 */
@Injectable()
export class AccessPermissionEffects {

  /**
   * Creates an instance of AccessPermissionEffects.
   *
   * @param {Actions} actions$
   * @param {PermissionApiClient} permissionApiClient
   * @memberof AccessPermissionEffects
   */
  constructor(
    private actions$: Actions,
    private permissionApiClient: PermissionApiClient
  ) { }

  /**
   * Load permissions effect
   *
   * @type {Observable<Action>}
   * @memberof AccessPermissionEffects
   */
  @Effect()
  loadPermissions$: Observable<Action> = this.actions$.pipe(
    ofType(loadPermissionsActions.LOAD_PERMISSIONS),
    switchMap(state => {
      return this.permissionApiClient.all()
        .map(permissions => new loadPermissionsActions.LoadPermissionsSuccessAction(permissions))
        .catch(error => of(new loadPermissionsActions.LoadPermissionsErrorAction(error)));
    })
  );

  /**
   * Get permission effect
   *
   * @type {Observable<Action>}
   * @memberof AccessPermissionEffects
   */
  @Effect()
  viewPermission$: Observable<Action> = this.actions$
    .ofType(viewPermissionActions.VIEW_PERMISSION)
    .map((action: viewPermissionActions.ViewPermissionAction) => action.payload)
    .switchMap(id => {
      return this.permissionApiClient.get(id)
        .map(permission => new viewPermissionActions.ViewPermissionSuccessAction(permission))
        .catch(error => of(new viewPermissionActions.ViewPermissionErrorAction(error)));
    });

  /**
   * Delete permission effect
   *
   * @type {Observable<Action>}
   * @memberof AccessPermissionEffects
   */
  @Effect()
  deletePermission$: Observable<Action> = this.actions$.pipe(

    ofType(deletePermissionActions.DELETE_PERMISSION),
    map((action: deletePermissionActions.DeletePermissionAction) => action.payload),
    switchMap(id => {
      return this.permissionApiClient.deleteRecord(id)
        .mergeMap((permission: Permission) => {
          return [
            new deletePermissionActions.DeletePermissionSuccessAction(permission),
            new loadPermissionsActions.LoadPermissionsAction()
          ];
        })
        .catch(error => of(new deletePermissionActions.DeletePermissionErrorAction(error)));
    })
  );

  /**
   * Delete multiple permission effect
   *
   * @type {Observable<Action>}
   * @memberof AccessPermissionEffects
   */
  @Effect()
  deleteMultiplePermissions$: Observable<Action> = this.actions$.pipe(
    ofType(deletePermissionActions.DELETE_MULTIPLE_PERMISSION),
    map((action: deletePermissionActions.DeleteMultiplePermissionAction) => action.payload),
    switchMap(ids => {
      return this.permissionApiClient.deleteMultipleRecords(ids)
        .mergeMap((permission: Permission) => {
          return [
            new deletePermissionActions.DeletePermissionSuccessAction(permission),
            new loadPermissionsActions.LoadPermissionsAction()
          ];
        })
        .catch(error => of(new deletePermissionActions.DeletePermissionErrorAction(error)));
    })
  );

  /**
   * Save permission effect
   *
   * @type {Observable<Action>}
   * @memberof AccessPermissionEffects
   */
  @Effect()
  savePermission$: Observable<Action> = this.actions$.pipe(
    ofType(savePermissionActions.SAVE_PERMISSION),
    map((action: savePermissionActions.SavePermissionAction) => action.payload),
    switchMap(form => {
      return this.permissionApiClient.savePermission(form)
        .map(permission => new savePermissionActions.SavePermissionSuccessAction(permission))
        .catch(error => of(new savePermissionActions.SavePermissionErrorAction(error)));
    })
  )
   ;
}
