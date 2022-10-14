import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BunkeringListComponent } from './views/bunkering-list/bunkering-list.component';
import { BunkeringAddComponent } from './views/bunkering-add/bunkering-add.component';
import { BunkeringRoutingModule } from './bunkering-routing.module';

import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';

import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FormArrayComponent } from './components/form-array/form-array.component';
@NgModule({
  declarations: [
    BunkeringListComponent,
    BunkeringAddComponent,
    FormArrayComponent,
  ],
  imports: [
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BunkeringRoutingModule,
    FormsModule,
  ],
})
export class BunkeringModule {}
