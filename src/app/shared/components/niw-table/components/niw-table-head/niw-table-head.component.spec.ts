import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiwTableHeadComponent } from './niw-table-head.component';

describe('NiwTableHeadComponent', () => {
  let component: NiwTableHeadComponent;
  let fixture: ComponentFixture<NiwTableHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiwTableHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiwTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
