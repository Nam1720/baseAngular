import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMonthViewComponent } from './plan-month-view.component';

describe('PlanMonthViewComponent', () => {
  let component: PlanMonthViewComponent;
  let fixture: ComponentFixture<PlanMonthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMonthViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMonthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
