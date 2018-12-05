import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phonebook';
  param = {value: 'world'};



  constructor(public translate: TranslateService) {
    translate.addLangs([`en`, `zh`]);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(`zh`);
  }


  changeLang(lang) {
    this.translate.use(lang);
    // window.location.reload();
  }

}
