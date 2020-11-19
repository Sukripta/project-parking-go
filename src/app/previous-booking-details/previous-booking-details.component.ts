import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatabaseService } from '../services/database.service';
import { PreviousBookingService } from '../services/previous-booking.service';
import { AppUtility } from '../utility/utility';

@Component({
  selector: 'app-previous-booking-details',
  templateUrl: './previous-booking-details.component.html',
  styleUrls: ['./previous-booking-details.component.css']
})
export class PreviousBookingDetailsComponent implements OnInit {

  bookingId:any;
  booking:any;
  subscription:Subscription;

  constructor(private prevBooking:PreviousBookingService,private router:Router,private database:DatabaseService) {
    this.subscription=this.prevBooking.prevBooking.subscribe((data)=>{
      if(data)
      {
        this.bookingId=data.bId;
        this.database.getPreviousBooking(JSON.parse(JSON.stringify(data))).subscribe((response)=>{

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
        this.router.navigate(['dashboard/previous']);

      }
    })
    

   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    
  }

  

}
