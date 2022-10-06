import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTableAddProductComponent } from './form-table-add-product.component';

describe('FormTableAddProductComponent', () => {
  let component: FormTableAddProductComponent;
  let fixture: ComponentFixture<FormTableAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTableAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTableAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
