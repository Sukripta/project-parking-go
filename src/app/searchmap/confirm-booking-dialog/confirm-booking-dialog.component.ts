import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActiveBookingService } from 'src/app/services/active-booking.service';
import { BookingService } from 'src/app/services/booking.service';
import { DatabaseService } from 'src/app/services/database.service';
import { AppUtility } from 'src/app/utility/utility';
import { BookingFailedDialogComponent } from '../booking-failed-dialog/booking-failed-dialog.component';
import { BookingSuccessDialogComponent } from '../booking-success-dialog/booking-success-dialog.component';


@Component({
  selector: 'app-confirm-booking-dialog',
  templateUrl: './confirm-booking-dialog.component.html',
  styleUrls: ['./confirm-booking-dialog.component.css']
})
export class ConfirmBookingDialogComponent implements OnInit {

  _data;
  booking;
  fromDate;
  toDate;
  cost;
  constructor(
    public dialogRef: MatDialogRef<ConfirmBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,private database:DatabaseService,private dialog:MatDialog,private bookingService:BookingService,private router:Router,private activeBooking:ActiveBookingService) {}

  ngOnInit(): void {
    this._data=this.data;
    this.fromDate=AppUtility.formatDate(new Date(this._data.from));
    this.toDate=AppUtility.formatDate(new Date(this._data.to));
    this.cost=AppUtility.dateDifference(new Date(this._data.from),new Date(this._data.to))*parseInt(this._data.cost);

    //console.log(this._data);
    

  }
  closeDialog()
  {
    this.dialogRef.close();
  }

  confirmBooking()
  {
    this.booking={
      carnumber:this._data.carnumber,
      carmodel:this._data.carmodel,
      type:this._data.type,
      owner:this._data.owner,
      lat:this._data.lat,
      lon:this._data.lon,
      from:this._data.from,
      to:this._data.to,
      dlat:this._data.dlat,
      dlon:this._data.dlon,
      active:1,
      cost:this._data.cost
    };

    console.log(JSON.stringify(this.booking));
    

    this.database.insertBooking(this.booking).subscribe((response)=>
    {
      response.then((data)=>{
        console.log(data);
        
        if(data.Status=="Success")
        {let dialogRefSuccess=this.dialog.open(BookingSuccessDialogComponent,
          {
            //width:'40%',
            panelClass:'transparent-dialog'
          });
          dialogRefSuccess.afterClosed().subscribe(()=>{
            this.bookingService.clearBookingData();
            let obj={"bId":data.bId};
            this.activeBooking.setBookingData(obj);



            this.router.navigate(['active-booking-details']);

            this.dialogRef.close();

          })
        }
        else
        {
          let dialogRefFail=this.dialog.open(BookingFailedDialogComponent,
            {
              panelClass:'transparent-dialog',
              //width:'40%'
            });
          dialogRefFail.afterClosed().subscribe(()=>{
            this.dialogRef.close();

          })

        }

        
      })
    })




  }

}
