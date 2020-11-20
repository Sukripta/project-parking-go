import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  array1;
  array2;
  array3;
  array4;
  c;
  post = {"email":localStorage.getItem('email')};

  vehicles = ["#","Car Type","Car Model","Car Number","#"]
  constructor(public http:HttpClient) { 
    this.http.post("https://war-ball.000webhostapp.com/getuserdetails.php",JSON.stringify(this.post)).subscribe(response => {this.array1 = response;console.log(this.array1)})
    // this.http.post("https://war-ball.000webhostapp.com/getspotlistrenter.php",JSON.stringify(this.post)).subscribe(response => {this.array2 = response;console.log(this.array2)})
    // this.http.post("https://war-ball.000webhostapp.com/getactivebookinglist.php",JSON.stringify(this.post)).subscribe(response => {this.array3 = response;console.log(this.array3)})
    // this.http.post("https://war-ball.000webhostapp.com/getpreviousbookinglist.php",JSON.stringify(this.post)).subscribe(response => {this.array4 = response;console.log(this.array4)})
    // fetch("https://jsonblob.com/api/a8640868-f7e9-11ea-aed3-9f6ff5adb407").then(response => response.json()).then(json => this.array = json)
  }

  deleteVehicle(number: any) {
    return this.http.post("https://war-ball.000webhostapp.com/deleteVehicle.php",JSON.stringify({"number":number})).subscribe(response => {console.log(response);this.http.post("https://war-ball.000webhostapp.com/getuserdetails.php",JSON.stringify(this.post)).subscribe(response => {this.array1 = response;console.log(this.array1)})});
  }



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
