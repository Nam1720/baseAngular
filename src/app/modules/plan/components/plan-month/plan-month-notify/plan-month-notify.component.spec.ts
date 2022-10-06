import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanMonthNotifyComponent} from './plan-month-notify.component';

describe('PlanMonthWarningComponent', () => {
  let component: PlanMonthNotifyComponent;
  let fixture: ComponentFixture<PlanMonthNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanMonthNotifyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMonthNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
