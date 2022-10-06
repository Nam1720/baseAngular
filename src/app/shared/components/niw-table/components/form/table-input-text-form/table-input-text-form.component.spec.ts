import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInputTextFormComponent } from './table-input-text-form.component';

describe('TableInputTextFormComponent', () => {
  let component: TableInputTextFormComponent;
  let fixture: ComponentFixture<TableInputTextFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInputTextFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInputTextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
