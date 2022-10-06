import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMonthFormFilterComponent } from './plan-month-form-filter.component';

describe('PlanMonthFormFilterComponent', () => {
  let component: PlanMonthFormFilterComponent;
  let fixture: ComponentFixture<PlanMonthFormFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMonthFormFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMonthFormFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
