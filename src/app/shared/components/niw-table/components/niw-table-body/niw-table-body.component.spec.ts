import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiwTableBodyComponent } from './niw-table-body.component';

describe('NiwTableBodyComponent', () => {
  let component: NiwTableBodyComponent;
  let fixture: ComponentFixture<NiwTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiwTableBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiwTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
