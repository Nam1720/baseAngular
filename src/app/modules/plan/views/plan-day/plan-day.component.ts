import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/shared/interfaces/common-interface';
import { DetailCalendar } from '../../interfaces/plan-day';

@Component({
  selector: 'app-plan-day',
  templateUrl: './plan-day.component.html',
  styleUrls: ['./plan-day.component.scss']
})
export class PlanDayComponent implements OnInit {

  date14: Date;

  listCalendarWeek: DetailCalendar[] = [
    { title: 'PX1', type: 1, start: '2022-08-28T07:00:00', end: '2022-08-28T12:00:00', code: '800018291', count: 10000 },
    { title: 'PX2', type: 2, start: '2022-08-28T10:00:00', end: '2022-08-28T13:00:00', code: '800018291', count: 10000 },
    { title: 'PX3', type: 3, start: '2022-08-28T14:30:00', end: '2022-08-28T17:17:00', code: '800018291', count: 10000 },
    { title: 'PX PT', type: 4, start: '2022-08-29T07:00:00', end: '2022-08-29T15:17:00', code: '800018291', count: 10000 },
    { title: 'PX3', type: 3, start: '2022-08-30T12:00:00', end: '2022-08-30T20:00:00', code: '800018291', count: 10000 },
    { title: 'PX2', type: 2, start: '2022-08-31T11:00:00', end: '2022-08-31T18:00:00', code: '800018291', count: 10000 },
    { title: 'PX3', type: 3, start: '2022-09-01T07:00:00', end: '2022-09-01T15:00:00', code: '800018291', count: 10000 },
    { title: 'PX PT', type: 4, start: '2022-09-02T07:00:00', end: '2022-09-02T17:00:00', code: '800018291', count: 10000 },
    { title: 'PX3', type: 3, start: '2022-09-03T09:00:00', end: '2022-09-03T17:00:00', code: '800018291', count: 10000 },
  ]

  listStep: Step[] = [
    {
      id: 0,
      content: 'Dập _ Máy 1 _ Phân xưởng 3 _12/1212',
      value: 0,
    },
    {
      id: 1,
      content: 'Uốn _ Máy 22 _ Phân xưởng 3 _12/12',
      value: 1,
    },
    {
      id: 2,
      content: 'Hàn _ Máy 22 _ Phân xưởng 3 _12/12',
      value: 2,
    },
    {
      id: 3,
      content: 'Cắt_ Máy 22 _ Phân xưởng 3 _12/12',
      value: 3,
    },
    {
      id: 4,
      content: 'Dũa_ Máy 22 _ Phân xưởng 3 _12/12',
      value: 4,
    },
    {
      id: 5,
      content: 'In _ Máy 22 _ Phân xưởng 3 _12/12',
      value: 5,
    }
  ]
  constructor() {
  
  }

  ngOnInit(): void {
  };

  changeTypeCalendar() {
    console.log('www');
    
  }
}
