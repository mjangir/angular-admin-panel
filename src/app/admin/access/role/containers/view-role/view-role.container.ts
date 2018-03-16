import { 
  Component, 
  OnDestroy, 
  OnInit, 
  ChangeDetectionStrategy 
}                             from '@angular/core';
import { AccessRoleSandbox }  from '../../role.sandbox';
import RoleForm               from '../../models/role-form.model';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.container.html',
  styleUrls: ['./view-role.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewRoleContainer implements OnInit {

  /**
   * Router Subscription
   * 
   * @private
   * @type {*}
   * @memberof ViewRoleContainer
   */
  private routerSubscription: any;

  /**
   * Role ID
   * 
   * @private
   * @type {number}
   * @memberof ViewRoleContainer
   */
  private roleId: number;

  public role: any;
  
  /**
   * Creates an instance of ViewRoleContainer.
   * 
   * @param {AccessRoleSandbox} accessRoleSandbox 
   * @memberof ViewRoleContainer
   */
  constructor(
    public accessRoleSandbox: AccessRoleSandbox,
    private route: ActivatedRoute
  ) { }

  /**
   * On Init container
   * 
   * @memberof ViewRoleContainer
   */
  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
      this.roleId = params['id'];
      this.accessRoleSandbox.viewRole(this.roleId);
    });
  }

  /**
   * Unsubscribe from all Observables
   * 
   * @memberof CreateRoleContainer
   */
  public onNgDestroy() {
    this.routerSubscription.unsubscribe();
    this.accessRoleSandbox.unregisterEvents();
  }

}