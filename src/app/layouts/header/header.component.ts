import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {MenuItem} from 'primeng/api';
import { AppService } from 'src/app/services/app.service';
import { destroyLogged } from 'src/app/utils/jwt';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuAccount: MenuItem[] = [];

  constructor(public translate: TranslateService, public appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.setMenuAccount()
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  setMenuAccount(): void {
    this.menuAccount = [
      {
        label: 'Logout',
        icon: 'pi pi-refresh',
        command: () => {
          this.logout();
        }
      }
    ]
  }

  logout() {
    destroyLogged();
    this.router.navigate(['login']);
  }
}
