import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiwTableConfigColComponent } from './niw-table-config-col.component';

describe('NiwTableConfigColComponent', () => {
  let component: NiwTableConfigColComponent;
  let fixture: ComponentFixture<NiwTableConfigColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiwTableConfigColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiwTableConfigColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
