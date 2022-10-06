import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/over-view' },
  {
    path: 'login',
    loadChildren: () =>
      import(`./modules/auth/auth.module`).then((module) => module.AuthModule),
    data: {},
  },
  {
    path: 'over-view',
    loadChildren: () =>
      import(`./modules/over-view/over-view.module`).then(
        (module) => module.OverViewModule
      ),
    data: {},
  },
  {
    path: 'plan',
    loadChildren: () =>
      import(`./modules/plan/plan.module`).then((module) => module.PlanModule),
    data: {},
  },
  {
    path: 'production',
    loadChildren: () =>
      import(`./modules/production/production.module`).then(
        (module) => module.ProductionModule
      ),
    data: {},
  },
  {
    path: 'category',
    loadChildren: () =>
      import(`./modules/category/category.module`).then(
        (module) => module.CategoryModule
      ),
    data: {},
  },
  {
    path: 'bunkering',
    loadChildren: () =>
      import(`./modules/bunkering/bunkering.module`).then(
        (module) => module.BunkeringModule
      ),
    data: {},
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // Or custom preload from custom service follow data router
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
