import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCategoryLaborComponent } from './modal-add-category-labor.component';

describe('ModalAddCategoryLaborComponent', () => {
  let component: ModalAddCategoryLaborComponent;
  let fixture: ComponentFixture<ModalAddCategoryLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCategoryLaborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddCategoryLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
