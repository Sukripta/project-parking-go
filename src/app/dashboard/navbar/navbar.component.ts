import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchUrl = "https://cdn.pixabay.com/photo/2019/08/03/09/52/map-4381478__340.jpg";
  registerUrl = "https://image.freepik.com/free-vector/services-concept_62688-108.jpg";
  
  constructor(public dialog:MatDialog) { }
  
  openHelpDialog() {
      this.dialog.open(HelpComponent);
  }
  openContactDialog(){
      this.dialog.open(ContactComponent);
  }
  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
})
export class HelpComponent {
}

@Component({
  selector: 'app-help',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
}
  
