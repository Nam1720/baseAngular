import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { BunkeringListComponent } from './views/bunkering-list/bunkering-list.component';

const routes: Routes = [{ path: '', component: BunkeringListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BunkeringRoutingModule {}
