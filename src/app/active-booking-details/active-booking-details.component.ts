import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveBookingService } from '../services/active-booking.service';
import { DatabaseService } from '../services/database.service';
import { QrCodeService } from '../services/qr-code.service';
import { AppUtility } from '../utility/utility';

@Component({
  selector: 'app-active-booking-details',
  templateUrl: './active-booking-details.component.html',
  styleUrls: ['./active-booking-details.component.css']
})
export class ActiveBookingDetailsComponent implements OnInit,OnDestroy {

  bookingId:any;
  booking:any;
  subscription:Subscription;

  constructor(private activeBooking:ActiveBookingService,private router:Router,private database:DatabaseService,private qr:QrCodeService) {
    this.subscription=this.activeBooking.activeBooking.subscribe((data)=>{
      if(data)
      {
        this.bookingId=data.bId;
        this.database.getActiveBooking(JSON.parse(JSON.stringify(data))).subscribe((response)=>{

          response.then((data)=>{
            console.log(data);
            this.booking=JSON.parse(JSON.stringify(data));
            this.booking.cost=AppUtility.dateDifference(new Date(this.booking.fromtime),new Date(this.booking.totime))*parseInt(this.booking.cost);
            this.booking.fromtime=AppUtility.formatDate(new Date(this.booking.fromtime));
          this.booking.totime=AppUtility.formatDate(new Date(this.booking.totime));
          
          })
        });


      }
      else
      {
        this.router.navigate(['dashboard/active']);

      }
    })
    

   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    
  }

  openQREntry()
  {
    this.qr.setQR({"bId":this.bookingId});
    this.router.navigate(['active-booking-details/qr-page']);

  }

  openQRExit()
  {
    
    this.qr.setQR({"bId":this.bookingId,"exit":1});
    this.router.navigate(['active-booking-details/qr-page']);

  }

}
