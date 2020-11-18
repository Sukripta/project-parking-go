import { TestBed } from '@angular/core/testing';

import { ActiveBookingService } from './active-booking.service';

describe('ActiveBookingService', () => {
  let service: ActiveBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
