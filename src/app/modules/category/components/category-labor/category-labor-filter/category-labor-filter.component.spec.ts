import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLaborFilterComponent } from './category-labor-filter.component';

describe('CategoryLaborFilterComponent', () => {
  let component: CategoryLaborFilterComponent;
  let fixture: ComponentFixture<CategoryLaborFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryLaborFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLaborFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
