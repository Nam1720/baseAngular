import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMonthCreateEditComponent } from './plan-month-create-edit.component';

describe('PlanMonthCreateEditComponent', () => {
  let component: PlanMonthCreateEditComponent;
  let fixture: ComponentFixture<PlanMonthCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMonthCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMonthCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
