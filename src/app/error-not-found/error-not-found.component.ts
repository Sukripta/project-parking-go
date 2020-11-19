import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error-not-found',
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.css']
})
export class ErrorNotFoundComponent implements OnInit {

  animOptions:AnimationOptions={path:"assets/json-animations/error.json"};

  constructor() { }

  ngOnInit(): void {
  }

}
