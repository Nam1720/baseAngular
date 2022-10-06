import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanDayComponent } from './views/plan-day/plan-day.component';

import { AuthGuardService } from '../../services/auth/auth-guard.service';
import { PlanMonthCreateEditComponent } from './views/plan-month/plan-month-create-edit/plan-month-create-edit.component';
import { PlanMonthViewComponent } from './views/plan-month/plan-month-view/plan-month-view.component';
import { PlanMonthComponent } from './views/plan-month/plan-month.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'plan-month',
        children: [
          {
            path: '',
            component: PlanMonthComponent,
            data: {
              breadcrumbs: [{ label: 'Kế hoạch tháng', url: 'plan-month' }],
            },
          },
          {
            path: 'view/:id',
            component: PlanMonthViewComponent,
            data: {
              breadcrumbs: [{ label: 'View Kế Hoạch Sản Xuất Tháng' }],
            },
          },
          {
            path: 'add',
            component: PlanMonthCreateEditComponent,
            data: {
              breadcrumbs: [
                { label: 'Tạo Kế Hoạch Sản Xuất Tháng', url: 'add' },
              ],
            },
          },
          {
            path: 'edit/:id',
            component: PlanMonthCreateEditComponent,
            data: {
              breadcrumbs: [{ label: 'Sửa Kế Hoạch Sản Xuất Tháng' }],
            },
          },
        ],
        data: {
          breadcrumbs: [{ label: 'Kế hoạch tháng', url: 'plan-month' }],
        },
        canActivate: [AuthGuardService],
      },

      {
        path: 'plan-day',
        component: PlanDayComponent,
        data: {
          breadcrumbs: [{ label: 'Kế hoạch ngày', url: 'plan-day' }],
        },
        canActivate: [AuthGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanRoutingModule {}
