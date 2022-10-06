import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailCategoryProductComponent } from './modal-detail-category-product.component';

describe('ModalDetailCategoryProductComponent', () => {
  let component: ModalDetailCategoryProductComponent;
  let fixture: ComponentFixture<ModalDetailCategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailCategoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
