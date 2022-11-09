import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';

import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { ClickOutSideDirective } from './directives/click-out-side.directive';
import { SelectTableComponent } from './components/select-table/select-table.component';
import { InputTableComponent } from './components/input-table/input-table.component';
import { StepComponent } from './components/step/step.component';
import { InputTextThrottleComponent } from './components/input-text-throttle/input-text-throttle.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ProgressUploadComponent } from './components/progress-upload/progress-upload.component';
import { DndDirective } from './directives/dnd.directive';

import { NiwTableComponent } from './components/niw-table/niw-table.component';
import { NiwTableLoadingComponent } from './components/niw-table/components/niw-table-loading/niw-table-loading.component';
import { NiwTableHeadComponent } from './components/niw-table/components/niw-table-head/niw-table-head.component';
import { NiwTableBodyComponent } from './components/niw-table/components/niw-table-body/niw-table-body.component';
import { NiwTableConfigColComponent } from './components/niw-table/components/niw-table-config-col/niw-table-config-col.component';
import { TableOptionSelectFormComponent } from './components/niw-table/components/form/table-option-select-form/table-option-select-form.component';
import { TableHeadItemComponent } from './components/niw-table/components/table-head-item/table-head-item.component';
import { TableBodyItemComponent } from './components/niw-table/components/table-body-item/table-body-item.component';
import { TableInputTextFormComponent } from './components/niw-table/components/form/table-input-text-form/table-input-text-form.component';
import { TableInputNumberFormComponent } from './components/niw-table/components/form/table-input-number-form/table-input-number-form.component';
import { TableDateFormComponent } from './components/niw-table/components/form/table-date-form/table-date-form.component';
import { ActionTableComponent } from './components/action-table/action-table.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ScrollTableComponent } from './components/scroll-table/scroll-table.component';

@NgModule({
  declarations: [
    NiwTableComponent,
    NiwTableLoadingComponent,
    NiwTableHeadComponent,
    NiwTableBodyComponent,
    NiwTableConfigColComponent,
    TableOptionSelectFormComponent,
    TableHeadItemComponent,
    TableBodyItemComponent,
    CustomTableComponent,
    ClickOutSideDirective,
    SelectTableComponent,
    InputTableComponent,
    StepComponent,
    InputTextThrottleComponent,
    ConfirmModalComponent,
    UploadFileComponent,
    ProgressUploadComponent,
    DndDirective,
    TableInputTextFormComponent,
    TableInputNumberFormComponent,
    TableDateFormComponent,
    ActionTableComponent,
    ScrollTableComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    ConfirmDialogModule,
    FileUploadModule,
    CheckboxModule,
    InputNumberModule,
    ProgressBarModule,
  ],
  exports: [
    NiwTableComponent,
    CommonModule,
    FormsModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    ConfirmDialogModule,
    FileUploadModule,
    CheckboxModule,
    InputNumberModule,
    // component
    CustomTableComponent,
    StepComponent,
    InputTextThrottleComponent,
    ConfirmModalComponent,
    UploadFileComponent,
    ActionTableComponent,
    ProgressBarModule,
  ],
  providers: [],
})
export class SharedModule {}
