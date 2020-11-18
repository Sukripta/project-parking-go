import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonValidators } from './../common-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    FirstName: new FormControl('',[
      Validators.required,
      CommonValidators.cannotContainSpace
    ]),
    LastName: new FormControl('',[
      Validators.required,
      CommonValidators.cannotContainSpace
    ]),
    email : new FormControl('',[
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    phnNumber : new FormControl('',[
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
    ])
  });

  get FirstName() {
    return this.form.get('FirstName');
  }
  get LastName() {
    return this.form.get('LastName');
  }
  get email() {
    return this.form.get('email');
  }
  get phnNumber() {
    return this.form.get('phnNumber');
  }

  signup() {
    this.form.setErrors({
      isValid: true
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
