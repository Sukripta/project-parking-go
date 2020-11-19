import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousBookingDetailsComponent } from './previous-booking-details.component';

describe('PreviousBookingDetailsComponent', () => {
  let component: PreviousBookingDetailsComponent;
  let fixture: ComponentFixture<PreviousBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
