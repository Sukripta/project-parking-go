import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBookingDetailsComponent } from './active-booking-details.component';

describe('ActiveBookingDetailsComponent', () => {
  let component: ActiveBookingDetailsComponent;
  let fixture: ComponentFixture<ActiveBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
