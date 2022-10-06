import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLaborComponent } from './category-labor.component';

describe('CategoryLaborComponent', () => {
  let component: CategoryLaborComponent;
  let fixture: ComponentFixture<CategoryLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryLaborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
