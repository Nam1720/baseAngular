import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { OverViewRoutingModule } from './over-view-routing.module';

import { OverViewComponent } from './views/over-view/over-view.component';


@NgModule({
  declarations: [
    OverViewComponent
  ],
  imports: [
    CommonModule,
    OverViewRoutingModule,
    SharedModule
  ]
})
export class OverViewModule { }
