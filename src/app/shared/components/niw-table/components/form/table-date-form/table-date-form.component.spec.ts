import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDateFormComponent } from './table-date-form.component';

describe('TableDateFormComponent', () => {
  let component: TableDateFormComponent;
  let fixture: ComponentFixture<TableDateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
