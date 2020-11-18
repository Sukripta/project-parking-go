import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisteredSpotService {

  private _registeredSpot=new BehaviorSubject(null);
  constructor() { }

  get registeredSpot()
  {
    return this._registeredSpot;
  }

  setSpotData(data)
  {
    this._registeredSpot.next(data);
  }

  clearSpotData()
  {
    this._registeredSpot.next(null);
  }
}
