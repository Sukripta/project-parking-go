import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviousBookingService {

  private _prevBooking=new BehaviorSubject(null);
  constructor() { }

  get prevBooking()
  {
    return this._prevBooking;
  }

  setBookingData(data)
  {
    this._prevBooking.next(data);
  }

  clearBookingData()
  {
    this._prevBooking.next(null);
  }
}
