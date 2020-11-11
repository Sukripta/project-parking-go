import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-spot-id-dialog',
  templateUrl: './spot-id-dialog.component.html',
  styleUrls: ['./spot-id-dialog.component.css']
})
export class SpotIdDialogComponent implements OnInit {

  spotData;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.spotData=this.data;
  }


}
