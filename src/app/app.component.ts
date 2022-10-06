import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './services/app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSubcribe: any = null;
  isPageLogin: boolean = false;

  constructor (public translate: TranslateService, public appService: AppService, public location: Location) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('vi');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
