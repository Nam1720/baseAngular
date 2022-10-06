import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy, AfterViewInit {
  navItems: MenuItem[] = [];
  isHover: boolean = false;

  constructor(
    public translate: TranslateService,
    public appService: AppService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.onWatchLangChange();
    // User settimeout because The first time I loaded the app, I didn't have time to set the default lang
    setTimeout(() => {
      this.setNavMain();
    }, 100);
  }

  ngOnDestroy(): void {
    this.translate.onLangChange.unsubscribe();
  }

  onWatchLangChange(): void {
    this.translate.onLangChange.subscribe(() => {
      this.setNavMain();
    });
  }

  public setNavMain(): void {
    this.navItems = [
      {
        label: this.translate.instant('nav.dashboard'),
        icon: 'icon-document',
        routerLink: ['/over-view'],
      },
      {
        label: this.translate.instant('nav.plan'),
        icon: 'icon-chart',
        routerLink: ['/plan/plan-year'],
        items: [
          {
            label: this.translate.instant('nav.plan_year'),
            routerLink: ['/plan/plan-year'],
          },
          {
            label: this.translate.instant('nav.plan_month'),
            routerLink: ['/plan/plan-month'],
          },
          {
            label: this.translate.instant('nav.plan_day'),
            routerLink: ['/plan/plan-day'],
          },
          { label: this.translate.instant('nav.plan_add') },
          { label: this.translate.instant('nav.balance_production') },
          { label: this.translate.instant('nav.balance_capacity') },
          { label: this.translate.instant('nav.transfer_request') },
          { label: this.translate.instant('nav.supplies_level') },
        ],
      },
      {
        label: this.translate.instant('nav.production'),
        icon: 'icon-chart',
        routerLink: ['/production'],
        items: [
          { label: this.translate.instant('nav.follow_production') },
          { label: this.translate.instant('nav.order_production') },
          { label: this.translate.instant('nav.factory') },
          { label: this.translate.instant('nav.team_production') },
          { label: this.translate.instant('nav.procedure') },
        ],
      },
      {
        label: this.translate.instant('nav.category'),
        icon: 'icon-chart',
        routerLink: ['/category'],
        items: [
          {
            label: this.translate.instant('nav.category_product'),
            routerLink: ['/category/product'],
          },
          { label: this.translate.instant('nav.category_machine') },
          { label: this.translate.instant('nav.category_factory') },
          {
            label: this.translate.instant('nav.category_labor'),
            routerLink: ['/category/labor'],
          },
          {
            label: this.translate.instant('nav.category_customer'),
            routerLink: ['/category/customer'],
          },
          { label: this.translate.instant('nav.category_warehouse') },
        ],
      },
      {
        label: this.translate.instant('nav.product'),
        icon: 'icon-product',
        routerLink: ['/over-view'],
        items: [
          { label: this.translate.instant('nav.suppliers') },
          { label: this.translate.instant('nav.product') },
          { label: this.translate.instant('nav.nguyencong') },
        ],
      },
      {
        label: this.translate.instant('nav.asset_management'),
        icon: 'icon-chart',
        routerLink: ['/over-view'],
      },
      {
        label: this.translate.instant('nav.report'),
        icon: 'icon-chart',
        routerLink: ['/over-view'],
      },
      {
        label: this.translate.instant('nav.user'),
        icon: 'icon-friends2',
        routerLink: ['/over-view'],
      },
      {
        label: 'Bunkering',
        icon: 'icon-friends2',
        routerLink: ['/bunkering'],
      },
    ];
  }
}
