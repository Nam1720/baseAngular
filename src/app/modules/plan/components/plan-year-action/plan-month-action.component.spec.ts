import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanYearActionComponent } from './plan-year-action.component';

describe('PlanYearActionComponent', () => {
  let component: PlanYearActionComponent;
  let fixture: ComponentFixture<PlanYearActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanYearActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanYearActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
