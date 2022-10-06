import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInputNumberFormComponent } from './table-input-number-form.component';

describe('TableInputNumberFormComponent', () => {
  let component: TableInputNumberFormComponent;
  let fixture: ComponentFixture<TableInputNumberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInputNumberFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInputNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
