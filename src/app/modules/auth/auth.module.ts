import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from "./../../shared/shared.module";

import { AuthRoutingModule, ArrayOfComponents } from './auth-routing.module';
import { FormLoginComponent } from './components/form-login/form-login.component';

@NgModule({
  declarations: [
    ArrayOfComponents,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    SharedModule
  ]
})
export class AuthModule { }
