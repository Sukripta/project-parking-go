import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  imageUrl = "https://i.ibb.co/bzkxx2K/Logo-removebg-preview.png";
  
  constructor(private spinner:NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    },2500);
  }

  logout()
  {
    localStorage.removeItem('email');
    
  }

}
