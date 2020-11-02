import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  array;
  post = {"email":"12200116031s@gmail.com"}

  constructor(public http:HttpClient) { 
    this.http.post("https://war-ball.000webhostapp.com/getuserdetails.php",JSON.stringify(this.post)).subscribe(response => {this.array = response;console.log(this.array)})
    // fetch("https://jsonblob.com/api/a8640868-f7e9-11ea-aed3-9f6ff5adb407").then(response => response.json()).then(json => this.array = json)
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
