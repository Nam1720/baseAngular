import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductTableComponent } from './category-product-table.component';

describe('CategoryProductTableComponent', () => {
  let component: CategoryProductTableComponent;
  let fixture: ComponentFixture<CategoryProductTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
