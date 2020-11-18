import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppData } from '../app.details';
import { QrCodeService } from '../services/qr-code.service';
import { AppUtility } from '../utility/utility';

@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.component.html',
  styleUrls: ['./qr-page.component.css']
})
export class QrPageComponent implements OnInit ,OnDestroy{

  qrData:string=null;
  exit=null;

  constructor(private qr:QrCodeService,private router:Router,private appData:AppData) {
    qr.qrData.subscribe((data)=>{
      if(data)
      {
        this.exit=data.exit;
        this.qrData=AppUtility.AESEncrypt(JSON.stringify(data),appData.appData.AESKey);
      }
      else
      router.navigate(['dashboard/active']);

    });

   }
  ngOnDestroy(): void {
    this.qr.clearQR();
  }

  ngOnInit(): void {
  }

}
