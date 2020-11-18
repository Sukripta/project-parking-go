import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveBookingService } from 'src/app/services/active-booking.service';
import { DatabaseService } from 'src/app/services/database.service';
import { AppUtility } from 'src/app/utility/utility';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  bookings:any[];
  owner="12200116031s@gmail.com";

  constructor(private database:DatabaseService,private activeBooking:ActiveBookingService,private router:Router) {
    this.bookings=[];

   }

  ngOnInit(): void {
    this.database.getActiveBookingList({"email":this.owner}).subscribe((response)=>{
      response.then((data)=>{
        this.bookings.length=0;
        data.forEach((item)=>{
          
          item.fromtime=AppUtility.formatDate(new Date(item.fromtime));
          item.totime=AppUtility.formatDate(new Date(item.totime));
          this.bookings.push(item);
        });

      });
    });



  }

  

  showDetails(i)
  {
    this.activeBooking.setBookingData({"bId":this.bookings[i].bId});
    this.router.navigate(['active-booking-details']);
  }

}
