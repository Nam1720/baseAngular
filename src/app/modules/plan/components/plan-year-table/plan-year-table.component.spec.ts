import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanYearTableComponent } from './plan-year-table.component';

describe('PlanYearTableComponent', () => {
  let component: PlanYearTableComponent;
  let fixture: ComponentFixture<PlanYearTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanYearTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanYearTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
