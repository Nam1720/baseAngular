import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadItemComponent } from './table-head-item.component';

describe('TableHeadItemComponent', () => {
  let component: TableHeadItemComponent;
  let fixture: ComponentFixture<TableHeadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeadItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
