import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { TYPE_COLOR_EVENT, TYPE_CALENDAR_YEAR, TYPE_CALENDAR_MONTH, TYPE_CALENDAR_DAY } from '../../../constants/calendar'
@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.scss']
})
export class CalendarWeekComponent implements OnInit {
  @Input() listCalendar:any;
  @Output() changeTypeCalendar = new EventEmitter();

  calendarOptions: CalendarOptions = {};

  constructor() {
  
  }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'timeGridWeek',
      weekends: true,
      events: [],
      editable: true,
      headerToolbar: {
        left: 'dayGridMonth, timeGridWeek, timeGridDay',
        center: 'title',
        right: 'prev,next today'
      },
      eventColor: '#FFA14A',
      slotLabelFormat:{
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
      },
      customButtons: {
        dayGridMonth: {
          text: 'Năm'
        },
        timeGridWeek: {
          text: 'Tháng'
        },
        timeGridDay: {
          text: 'Ngày',
          click: this.changeCalendarDay
        }
      },
      eventClick: this.handleEventClick,
      eventContent: this.renderEventContent,
    };
    this.getDataEvents();
  };

  changeCalendarDay(){
    this.changeTypeCalendar.emit()
  }

  getDataEvents():void {
    this.listCalendar.map((item: any) => {
      const bgColor = TYPE_COLOR_EVENT.find((st: { type: any; }) => st.type === item.type);
      item.backgroundColor = bgColor?.value;
      item.borderColor = bgColor?.value;
    })
    this.calendarOptions.events = this.listCalendar;
  };

  handleEventClick(event: any): void {
    console.log('event: ', event);
  }

  renderEventContent(eventItem: any, createElement: any) {
    const startDate = eventItem.event.start;
    const endDate = eventItem.event.end;
    const innerHtml =
      `<div class="fc-event-main-frame">
        <div class="fc-event-title-container">
          <div class="fc-event-title full-width color-dark text-bold text-center position-abs">
            ${eventItem.event._def.title ? eventItem.event._def.title : ''}
          </div>
          <div class="fc-event-code font-size-12 ">
            Mã SP: <span class="font-size-14 font-weight-medium">${eventItem.event._def.extendedProps.code ? eventItem.event._def.extendedProps.code : ''}</span>
          </div>
          <div class="fc-event-count font-size-12">
            SL: <span class="font-size-14 font-weight-medium">${eventItem.event._def.extendedProps.count ? eventItem.event._def.extendedProps.count : 0}</span>
          </div>
        </div>
        <div class="fc-event-time font-size-12">
          (${startDate.getHours()}:${startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()})
        </div> 
      </div>`
    return createElement = {html: innerHtml}
  }
}
