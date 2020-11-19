import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(config: NgbCarouselConfig,public dialog:MatDialog) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

  openAbout(){
    this.dialog.open(AboutUsComponent,{width:'80%',height:'80%'});
  }
  openWorldwide(){
    this.dialog.open(WorldwideComponent,{width:'50%',height:'50%'});
  }

}

@Component({
  selector: 'app-homepage',
  templateUrl: './aboutus.component.html',
})
export class AboutUsComponent{
  
}

@Component({
  selector: 'app-homepage',
  templateUrl: './worldwide.component.html',
})
export class WorldwideComponent{
  
}