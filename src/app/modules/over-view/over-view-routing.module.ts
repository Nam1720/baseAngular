import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service'
import { OverViewComponent } from './views/over-view/over-view.component';

const routes: Routes = [
  {
    path: '',
    component: OverViewComponent,
    children: [
      {
        path: '',
        data: {
          breadcrumbs: [
            { label: 'Tổng quan', url: 'over-view' }
          ],
        },
        canActivate: [AuthGuardService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverViewRoutingModule { }
