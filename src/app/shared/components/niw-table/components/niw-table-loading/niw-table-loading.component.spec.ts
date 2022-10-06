import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiwTableLoadingComponent } from './niw-table-loading.component';

describe('NiwTableLoadingComponent', () => {
  let component: NiwTableLoadingComponent;
  let fixture: ComponentFixture<NiwTableLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiwTableLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiwTableLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
