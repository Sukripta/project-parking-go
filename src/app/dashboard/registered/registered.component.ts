import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class RegisteredComponent {
  array2;
  post = {"email":"12200116031s@gmail.com"}
  constructor(public http:HttpClient) {
    this.http.post("https://war-ball.000webhostapp.com/getspotlistrenter.php",JSON.stringify(this.post)).subscribe(response => {this.array2 = response;console.log(this.array2)})

  }
}

