import { Injectable } from '@angular/core';
import { TYPE_CALENDAR_YEAR } from '../constants/calendar';
@Injectable({
  providedIn: 'root'
})
export class PlanDayService {
  typeCalendar: string = TYPE_CALENDAR_YEAR;

  constructor() { }

  onUpdateTypeCalendar(value: string) {
    this.typeCalendar = value
  }
}
