import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-register-fail-dialog',
  templateUrl: './register-fail-dialog.component.html',
  styleUrls: ['./register-fail-dialog.component.css']
})
export class RegisterFailDialogComponent implements OnInit {

  animOptions:AnimationOptions={path:'assets/json-animations/failure.json',loop:0};

  constructor() { }

  ngOnInit(): void {
  }


}
