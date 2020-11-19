import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { RegisterFailDialogComponent } from '../register-fail-dialog/register-fail-dialog.component';
import { RegisterSuccessDialogComponent } from '../register-success-dialog/register-success-dialog.component';
import { SpotIdDialogComponent } from '../spot-id-dialog/spot-id-dialog.component';

@Component({
  selector: 'app-register-confirm-dialog',
  templateUrl: './register-confirm-dialog.component.html',
  styleUrls: ['./register-confirm-dialog.component.css']
})
export class RegisterConfirmDialogComponent implements OnInit {

  spot: any;

  constructor(
    public dialogRef: MatDialogRef<RegisterConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private database: DatabaseService,
    private dialog: MatDialog,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.spot = this.data;
    console.log(this.spot);
  }

  confirmRegistration() {
    let spotData = {
      lat: this.spot.position.lat,
      lon: this.spot.position.lon,
      ownerid: this.spot.owner,
      address: this.spot.address,
    };
    if (this.spot.fourWheelerNum) {
      spotData['fournum'] = parseInt(this.spot.fourWheelerNum);
      spotData['fourcost'] = parseInt(this.spot.fourWheelerCost);
    }
    if (this.spot.twoWheelerNum) {
      spotData['twonum'] = parseInt(this.spot.twoWheelerNum);
      spotData['twocost'] = parseInt(this.spot.twoWheelerCost);
    }

    console.log(spotData);

    this.database.insertSpot(spotData).subscribe((response) => {
      response
        .then((data) => {
          if (data.Status == 'OKOK') {
            let dialogRefSuccess = this.dialog.open(RegisterSuccessDialogComponent, {
              panelClass: 'status-dialog',
            });
            dialogRefSuccess.afterClosed().subscribe(() => {
              
              let dialogRefId=this.dialog.open(SpotIdDialogComponent,{data:JSON.parse(JSON.stringify(data)),panelClass:'spot-id-dialog'});
              dialogRefId.afterClosed().subscribe(()=>{

                this.dialogRef.close();
                this.router.navigate(['dashboard']);



              })
              
            });
          } else {
            let dialogRefFail = this.dialog.open(RegisterFailDialogComponent, {
              panelClass: 'status-dialog',
            });
            dialogRefFail.afterClosed().subscribe(() => {
              this.dialogRef.close();
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

