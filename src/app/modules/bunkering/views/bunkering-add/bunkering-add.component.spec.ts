import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BunkeringAddComponent } from './bunkering-add.component';

describe('BunkeringAddComponent', () => {
  let component: BunkeringAddComponent;
  let fixture: ComponentFixture<BunkeringAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BunkeringAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BunkeringAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
