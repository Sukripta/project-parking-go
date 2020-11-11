import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-register-success-dialog',
  templateUrl: './register-success-dialog.component.html',
  styleUrls: ['./register-success-dialog.component.css']
})
export class RegisterSuccessDialogComponent implements OnInit {

  animOptions:AnimationOptions={path:'assets/json-animations/success.json',loop:0};


  constructor() { }

  ngOnInit(): void {
  }

}
