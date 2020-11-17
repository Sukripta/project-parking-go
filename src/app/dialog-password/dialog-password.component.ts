import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonValidators } from '../common-validators';
import { DialogUsernameComponent } from '../dialog-username/dialog-username.component';

@Component({
  selector: 'app-dialog-password',
  templateUrl: './dialog-password.component.html',
  styleUrls: ['./dialog-password.component.css']
})
export class DialogPasswordComponent implements OnInit {
  
  form3;

  constructor(fb: FormBuilder, public dialog: MatDialog) {
    this.form3 = fb.group({
      username: ['', [Validators.required, CommonValidators.cannotContainSpace]],
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    })
   }

   get email() {
    return this.form3.get('email');
  }
  get username() {
    return this.form3.get('username')
  }

  open() {
    this.dialog.open(DialogUsernameComponent, {
      panelClass: 'dialog-username'
    })
  }

  ngOnInit(): void {
  }

}
