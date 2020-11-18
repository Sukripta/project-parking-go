import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

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
export class RegisteredComponent implements OnInit {

  owner:string="sayantanbarik729@gmail.com";
  spots:any[]=[];
  
  constructor(private database:DatabaseService) {

  }
  ngOnInit(): void {
    this.database.getRegisteredSpotList({"email":this.owner}).subscribe((response)=>{
      response.then((data)=>{
        this.spots.length=0;
        data.forEach((item)=>{
          this.spots.push(item);
        });

      })
    })
  }

  openRegisterDetails(i)
  {
    

  }
}

