import { Injectable }         from "@angular/core";
import { Effect, Actions }    from '@ngrx/effects';
import { Action }             from '@ngrx/store';
import { switchMap, map }     from 'rxjs/operators';
import { of }                 from 'rxjs/observable/of';
import { Observable }         from 'rxjs/Observable';
import { RoleApiClient }      from "../../services/role-api-client.service";
import RoleForm               from "../../models/role-form.model";
import * as loadRolesActions  from '../actions/load-roles.action';
import * as createRoleActions from '../actions/create-role.action';
import * as updateRoleActions from '../actions/update-role.action';
import * as viewRoleActions   from '../actions/view-role.action';
import * as deleteRoleActions from '../actions/delete-role.action';
import Role from "../../models/role.model";

/**
 * Access role effects
 * 
 * @export
 * @class AccessRoleEffects
 */
@Injectable()
export class AccessRoleEffects {

  /**
   * Creates an instance of AccessRoleEffects.
   * 
   * @param {Actions} actions$ 
   * @param {RoleApiClient} roleApiClient 
   * @memberof AccessRoleEffects
   */
  constructor(
    private actions$: Actions,
    private roleApiClient: RoleApiClient
  ) {}

  /**
   * Load roles effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessRoleEffects
   */
  @Effect()
  loadRoles$: Observable<Action> = this.actions$
    .ofType(loadRolesActions.LOAD_ROLES)
    .switchMap(state => {
      return this.roleApiClient.all()
        .map(roles => new loadRolesActions.LoadRolesSuccessAction(roles))
        .catch(error => of(new loadRolesActions.LoadRolesErrorAction(error)));
    });

  /**
   * Get role effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessRoleEffects
   */
  @Effect()
  viewRole$: Observable<Action> = this.actions$
    .ofType(viewRoleActions.VIEW_ROLE)
    .map((action: viewRoleActions.ViewRoleAction) => action.payload)
    .switchMap(id => {
      return this.roleApiClient.get(id)
        .map(role => new viewRoleActions.ViewRoleSuccessAction(role))
        .catch(error => of(new viewRoleActions.ViewRoleErrorAction(error)));
    });

  /**
   * Create role effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessRoleEffects
   */
  @Effect()
  createRole$: Observable<Action> = this.actions$
    .ofType(createRoleActions.CREATE_ROLE)
    .map((action: createRoleActions.CreateRoleAction) => action.payload)
    .switchMap(state => {
      return this.roleApiClient.create(state)
        .map(role => new createRoleActions.CreateRoleSuccessAction(role))
        .catch(error => of(new createRoleActions.CreateRoleErrorAction(error)));
    });

  /**
   * Update role effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessRoleEffects
   */
  @Effect()
  updateRole$: Observable<Action> = this.actions$
    .ofType(updateRoleActions.UPDATE_ROLE)
    .map((action: updateRoleActions.UpdateRoleAction) => action.payload)
    .switchMap(roleForm => {
      return this.roleApiClient.update(roleForm, roleForm.id)
        .map(role => new updateRoleActions.UpdateRoleSuccessAction(role))
        .catch(error => of(new updateRoleActions.UpdateRoleErrorAction(error)));
    });

  /**
   * Delete role effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessRoleEffects
   */
  @Effect()
  deleteRole$: Observable<Action> = this.actions$
    .ofType(deleteRoleActions.DELETE_ROLE)
    .map((action: deleteRoleActions.DeleteRoleAction) => action.payload)
    .switchMap(id => {
      return this.roleApiClient.deleteRecord(id)
        .mergeMap((role: Role) => {
          return [
              new deleteRoleActions.DeleteRoleSuccessAction(role),
              new loadRolesActions.LoadRolesAction()
          ];
        })
        .catch(error => of(new deleteRoleActions.DeleteRoleErrorAction(error)));
    });

  /**
   * Delete multiple role effect
   * 
   * @type {Observable<Action>}
   * @memberof AccessRoleEffects
   */
  @Effect()
  deleteMultipleRoles$: Observable<Action> = this.actions$
    .ofType(deleteRoleActions.DELETE_MULTIPLE_ROLE)
    .map((action: deleteRoleActions.DeleteMultipleRoleAction) => action.payload)
    .switchMap(ids => {
      return this.roleApiClient.deleteMultipleRecords(ids)
        .mergeMap((role: Role) => {
          return [
              new deleteRoleActions.DeleteRoleSuccessAction(role),
              new loadRolesActions.LoadRolesAction()
          ];
        })
        .catch(error => of(new deleteRoleActions.DeleteRoleErrorAction(error)));
    });
}