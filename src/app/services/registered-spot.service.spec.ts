import { TestBed } from '@angular/core/testing';

import { RegisteredSpotService } from './registered-spot.service';

describe('RegisteredSpotService', () => {
  let service: RegisteredSpotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredSpotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
