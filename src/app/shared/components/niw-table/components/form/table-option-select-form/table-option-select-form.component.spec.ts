import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOptionSelectFormComponent } from './table-option-select-form.component';

describe('TableOptionSelectFormComponent', () => {
  let component: TableOptionSelectFormComponent;
  let fixture: ComponentFixture<TableOptionSelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOptionSelectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOptionSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
