import { Injectable }    		from '@angular/core';
import { Sandbox }       		from './shared/sandbox/base.sandbox';
import { TranslateService } from 'ng2-translate';
import { ConfigService }    from './app-config.service';

@Injectable()
export class AppSandbox extends Sandbox {

  constructor(
  	private translate: TranslateService,
  	private configService: ConfigService
  ) {
    super();
  }

  /**
   * Sets up default language for the application. Uses browser default language.
   */
  public setupLanguage(): void {
    let localization: any        = this.configService.get('localization');
    let languages: Array<string> = localization.languages.map(lang => lang.code);
    let browserLang: string      = this.translate.getBrowserLang();

    this.translate.addLangs(languages);
    this.translate.setDefaultLang(localization.defaultLanguage);

    let selectedLang    = browserLang.match(/en|hr/) ? browserLang : localization.defaultLanguage;
    let selectedCulture = localization.languages.filter(lang => lang.code === selectedLang)[0].culture;

    this.translate.use(selectedLang);
  }

  /**
   * Returns global notification options
   */
  public getNotificationOptions(): any {
  	return this.configService.get('notifications').options;
  }
}