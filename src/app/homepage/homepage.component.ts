import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  imageUrl = "https://i.ibb.co/bzkxx2K/Logo-removebg-preview.png";
  showNavigationArrows = true;
  showNavigationIndicators = true;
  constructor(config: NgbCarouselConfig,private router:Router) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    if(localStorage.getItem('email'))
    {
      router.navigate(['dashboard']);

    }
  }

  ngOnInit(): void {
  }

}
