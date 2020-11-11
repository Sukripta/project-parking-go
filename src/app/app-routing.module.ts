import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveComponent } from './dashboard/active/active.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { PreviousComponent } from './dashboard/previous/previous.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import { RegisteredComponent } from './dashboard/registered/registered.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterSpotComponent } from './register-spot/register-spot.component';
import { BookingDetailsFormComponent } from './searchmap/booking-details-form/booking-details-form.component';
import { SearchmapComponent } from './searchmap/searchmap.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'dashboard',component:NavbarComponent},
  {path:'dashboard/profile',component:ProfileComponent},
  {path:'dashboard/active',component:ActiveComponent},
  {path:'dashboard/previous',component:PreviousComponent},
  {path:'dashboard/registered',component:RegisteredComponent},
  {path:'dashboard/register-spots',component:RegisterSpotComponent},
  
  {path:'dashboard/book-spots',component:BookingDetailsFormComponent},
  {path:'dashboard/book-spots/customer-map',component:SearchmapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
