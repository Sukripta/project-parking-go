import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {



  private _qrData=new BehaviorSubject(null);
  constructor() { }

  get qrData()
  {
    return this._qrData;
  }

  setQR(data)
  {
    this._qrData.next(data);
  }
  clearQR()
  {
    this._qrData.next(null);
  }
}
