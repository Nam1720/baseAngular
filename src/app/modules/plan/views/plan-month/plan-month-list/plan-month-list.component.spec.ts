import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMonthListComponent } from './plan-month-list.component';

describe('PlanMonthListComponent', () => {
  let component: PlanMonthListComponent;
  let fixture: ComponentFixture<PlanMonthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMonthListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMonthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
