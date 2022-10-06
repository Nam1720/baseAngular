import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCustomerComponent } from './category-customer.component';

describe('CategoryCustomerComponent', () => {
  let component: CategoryCustomerComponent;
  let fixture: ComponentFixture<CategoryCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
