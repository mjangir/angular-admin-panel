import { 
  Component, 
  OnDestroy, 
  OnInit, 
  ChangeDetectionStrategy 
}                             from '@angular/core';
import { AccessPermissionSandbox }  from '../../permission.sandbox';
import PermissionForm               from '../../models/permission-form.model';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-view-permission',
  templateUrl: './view-permission.container.html',
  styleUrls: ['./view-permission.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPermissionContainer implements OnInit {

  /**
   * Router Subscription
   * 
   * @private
   * @type {*}
   * @memberof ViewPermissionContainer
   */
  private routerSubscription: any;

  /**
   * Permission ID
   * 
   * @private
   * @type {number}
   * @memberof ViewPermissionContainer
   */
  private permissionId: number;

  public permission: any;
  
  /**
   * Creates an instance of ViewPermissionContainer.
   * 
   * @param {AccessPermissionSandbox} accessPermissionSandbox 
   * @memberof ViewPermissionContainer
   */
  constructor(
    public accessPermissionSandbox: AccessPermissionSandbox,
    private route: ActivatedRoute
  ) { }

  /**
   * On Init container
   * 
   * @memberof ViewPermissionContainer
   */
  ngOnInit() {
    this.permission = {
      firstName: null
    }

    this.routerSubscription = this.route.params.subscribe(params => {
      this.permissionId = +params['id'];
      this.accessPermissionSandbox.viewPermission(this.permissionId);
    });
  }

  /**
   * Unsubscribe from all Observables
   * 
   * @memberof CreatePermissionContainer
   */
  public onNgDestroy() {
    this.routerSubscription.unsubscribe();
  }

}