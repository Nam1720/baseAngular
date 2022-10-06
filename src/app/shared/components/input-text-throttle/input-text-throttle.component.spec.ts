import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextThrottleComponent } from './input-text-throttle.component';

describe('InputTextThrottleComponent', () => {
  let component: InputTextThrottleComponent;
  let fixture: ComponentFixture<InputTextThrottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextThrottleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextThrottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
