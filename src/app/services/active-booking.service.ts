import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveBookingService {

  private _activeBooking=new BehaviorSubject(null);
  constructor() { }

  get bookingDetails()
  {
    return this._activeBooking;
  }

  setBookingData(data)
  {
    this._activeBooking.next(data);
  }

  clearBookingData()
  {
    this._activeBooking.next(null);
  }
}
