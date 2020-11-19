import { Component, OnInit } from '@angular/core';
import { RegisteredSpotService } from '../services/registered-spot.service';

@Component({
  selector: 'app-registered-spot-details',
  templateUrl: './registered-spot-details.component.html',
  styleUrls: ['./registered-spot-details.component.css']
})
export class RegisteredSpotDetailsComponent implements OnInit {

  constructor(private registeredSpot:RegisteredSpotService) { }

  ngOnInit(): void {
  }

}
