import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanMonthYearFilterComponent} from './plan-month-filter.component';

describe('PlanMonthYearFilterComponent', () => {
  let component: PlanMonthYearFilterComponent;
  let fixture: ComponentFixture<PlanMonthYearFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanMonthYearFilterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMonthYearFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
