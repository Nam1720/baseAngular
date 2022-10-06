import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BunkeringListComponent } from './bunkering-list.component';

describe('BunkeringListComponent', () => {
  let component: BunkeringListComponent;
  let fixture: ComponentFixture<BunkeringListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BunkeringListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BunkeringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
