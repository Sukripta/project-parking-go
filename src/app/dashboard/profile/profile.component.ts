import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageUrl = "https://i.ibb.co/bzkxx2K/Logo-removebg-preview.png";
  searchUrl = "https://cdn.pixabay.com/photo/2019/08/03/09/52/map-4381478__340.jpg";
  registerUrl = "https://image.freepik.com/free-vector/services-concept_62688-108.jpg";
  
  constructor(private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    },2500);
  }
}
