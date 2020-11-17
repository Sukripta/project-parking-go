import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-username',
  templateUrl: './dialog-username.component.html',
  styleUrls: ['./dialog-username.component.css']
})
export class DialogUsernameComponent implements OnInit {
  form4;

  constructor(fb: FormBuilder, dialog: MatDialogRef<DialogUsernameComponent>) { 
    this.form4 = fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    })
  }

  get email() {
    return this.form4.get('email');
  }

  ngOnInit(): void {
  }

}
