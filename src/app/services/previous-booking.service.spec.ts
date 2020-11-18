import { TestBed } from '@angular/core/testing';

import { PreviousBookingService } from './previous-booking.service';

describe('PreviousBookingService', () => {
  let service: PreviousBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
