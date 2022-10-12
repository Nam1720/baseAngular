import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { BunkeringAddComponent } from './views/bunkering-add/bunkering-add.component';
import { BunkeringListComponent } from './views/bunkering-list/bunkering-list.component';

const routes: Routes = [
  { path: '', component: BunkeringListComponent },
  { path: 'add', component: BunkeringAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BunkeringRoutingModule {}
