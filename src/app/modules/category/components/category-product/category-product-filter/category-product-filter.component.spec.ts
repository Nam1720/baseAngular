import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductFilterComponent } from './category-product-filter.component';

describe('CategoryProductFilterComponent', () => {
  let component: CategoryProductFilterComponent;
  let fixture: ComponentFixture<CategoryProductFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
