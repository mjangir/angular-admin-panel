import { 
  Component, 
  OnDestroy, 
  OnInit, 
  ChangeDetectionStrategy 
}                             from '@angular/core';
import { AccessUserSandbox }  from '../../user.sandbox';
import UserForm               from '../../models/user-form.model';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.container.html',
  styleUrls: ['./view-user.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewUserContainer implements OnInit {

  /**
   * Router Subscription
   * 
   * @private
   * @type {*}
   * @memberof ViewUserContainer
   */
  private routerSubscription: any;

  /**
   * User ID
   * 
   * @private
   * @type {number}
   * @memberof ViewUserContainer
   */
  private userId: number;

  public user: any;
  
  /**
   * Creates an instance of ViewUserContainer.
   * 
   * @param {AccessUserSandbox} accessUserSandbox 
   * @memberof ViewUserContainer
   */
  constructor(
    public accessUserSandbox: AccessUserSandbox,
    private route: ActivatedRoute
  ) { }

  /**
   * On Init container
   * 
   * @memberof ViewUserContainer
   */
  ngOnInit() {
    this.user = {
      firstName: null
    }

    this.routerSubscription = this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.accessUserSandbox.viewUser(this.userId);
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}