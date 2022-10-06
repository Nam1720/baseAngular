import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMonthFormComponent } from './plan-month-form.component';

describe('PlanMonthFormComponent', () => {
  let component: PlanMonthFormComponent;
  let fixture: ComponentFixture<PlanMonthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMonthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMonthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
