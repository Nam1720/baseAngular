import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiwTableComponent } from './niw-table.component';

describe('NiwTableComponent', () => {
  let component: NiwTableComponent;
  let fixture: ComponentFixture<NiwTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiwTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiwTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
