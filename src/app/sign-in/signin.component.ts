import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { DialogPasswordComponent } from '../dialog-password/dialog-password.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form2;

  constructor(fb: FormBuilder, public dialog: MatDialog) { 
    this.form2 = fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() {
    return this.form2.get('email');
  }
  get password() {
    return this.form2.get('password');
  }

  signin() {
    this.form2.setErrors({
      isValid: true
    })
  }

  open() {
    this.dialog.open(DialogPasswordComponent, {
      panelClass: 'dialog-demo'
    })
  }

  ngOnInit(): void {
  }

}
