import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLaborTableComponent } from './category-labor-table.component';

describe('CategoryLaborTableComponent', () => {
  let component: CategoryLaborTableComponent;
  let fixture: ComponentFixture<CategoryLaborTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryLaborTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLaborTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
