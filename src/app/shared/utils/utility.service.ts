import { Injectable }           from '@angular/core';
import { TranslateService }     from 'ng2-translate';
import { ToastrService } from 'ngx-toastr';
import { ConfigService }        from '../../app-config.service';
import { Observable }           from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class UtilService {

  constructor(
    private translateService: TranslateService,
    private notificationService: ToastrService,
    private configService: ConfigService,
    private router: Router
  ) {}

  /**
   * Translates given message code and title code and displays corresponding notification
   *
   * @param messageTranslationCode
   * @param type
   * @param titleTranslationCode
   */
  public displayNotification(messageTranslationCode: string, type: string = 'info', titleTranslationCode?: string) {
    let message: string = this.translateService.instant(messageTranslationCode);
    let title: string = titleTranslationCode ? this.translateService.instant(titleTranslationCode) : null;

    switch (type) {
      case "error":
        title = this.translateService.instant('ErrorNotificationTitle');
        break;

      case "success":
        title = this.translateService.instant('SuccessNotificationTitle');
        break;

      case "alert":
        title = this.translateService.instant('WarningNotificationTitle');
        break;
      
      default:
        title = this.translateService.instant('InfoNotificationTitle');
        break;
    }

    this.notificationService[type](message, title, this.configService.get('notifications').options);
  }

  /**
   * Navigate after certain time
   * 
   * @param {Array<string>} route 
   * @param {number} [ms=500] 
   * @memberof UtilService
   */
  public navigateAfter(route: Array<string>, ms: number = 500) {
    setTimeout(() => {
      this.router.navigate(route);
    }, ms);
  }
}