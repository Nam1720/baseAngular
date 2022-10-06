import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanMonthActionComponent} from './plan-month-action.component';

describe('PlanYearActionComponent', () => {
  let component: PlanMonthActionComponent;
  let fixture: ComponentFixture<PlanMonthActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanMonthActionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMonthActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
