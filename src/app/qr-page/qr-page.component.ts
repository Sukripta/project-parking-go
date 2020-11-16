import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QrCodeService } from '../services/qr-code.service';

@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.component.html',
  styleUrls: ['./qr-page.component.css']
})
export class QrPageComponent implements OnInit ,OnDestroy{

  qrData:string=null;

  constructor(private qr:QrCodeService,private router:Router) {
    qr.qrData.subscribe((data)=>{
      if(data)
      this.qrData=JSON.stringify(data);
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
