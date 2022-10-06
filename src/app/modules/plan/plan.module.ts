import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';

import { PlanRoutingModule } from './plan-routing.module';

import { PlanDayComponent } from './views/plan-day/plan-day.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';


import { PlanMonthYearFilterComponent } from './components/plan-month/plan-month-filter/plan-month-filter.component';
import { PlanMonthActionComponent } from './components/plan-month/plan-month-action/plan-month-action.component';
import { PlanMonthCreateEditComponent } from './views/plan-month/plan-month-create-edit/plan-month-create-edit.component';

import { PlanMonthNotifyComponent } from './components/plan-month/plan-month-notify/plan-month-notify.component';
import { PlanMonthListComponent } from './views/plan-month/plan-month-list/plan-month-list.component';
import { CheckboxModule } from 'primeng/checkbox';
import { PlanMonthFormFilterComponent } from './components/plan-month/plan-month-form-filter/plan-month-form-filter.component';
import { CalendarWeekComponent } from './components/custom-calendar/calendar-week/calendar-week.component';
import { PlanMonthFormComponent } from './components/plan-month/plan-month-form/plan-month-form.component';
import { PlanMonthViewComponent } from './views/plan-month/plan-month-view/plan-month-view.component';
import { PlanMonthComponent } from './views/plan-month/plan-month.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  timeGrigPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    PlanDayComponent,
    PlanMonthYearFilterComponent,
    PlanMonthActionComponent,
    PlanMonthCreateEditComponent,
    PlanMonthNotifyComponent,
    PlanMonthListComponent,
    PlanMonthFormFilterComponent,
    CalendarWeekComponent,
    PlanMonthFormComponent,
    PlanMonthViewComponent,
    PlanMonthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlanRoutingModule,
    FullCalendarModule,
    TabViewModule,
    CheckboxModule,
    CalendarModule,
  ],
})
export class PlanModule {}
