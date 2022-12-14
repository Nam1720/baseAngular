import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMonthComponent } from './plan-month.component';

describe('PlanMonthComponent', () => {
  let component: PlanMonthComponent;
  let fixture: ComponentFixture<PlanMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
