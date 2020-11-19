import { SigninComponent } from './sign-in/signin.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveBookingDetailsComponent } from './active-booking-details/active-booking-details.component';

import { ActiveComponent } from './dashboard/active/active.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { PreviousComponent } from './dashboard/previous/previous.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import { RegisteredComponent } from './dashboard/registered/registered.component';
import { HomepageComponent } from './homepage/homepage.component';

import { SignupComponent } from './signup/signup.component';

import { QrPageComponent } from './qr-page/qr-page.component';
import { RegisterSpotComponent } from './register-spot/register-spot.component';
import { BookingDetailsFormComponent } from './searchmap/booking-details-form/booking-details-form.component';
import { SearchmapComponent } from './searchmap/searchmap.component';
import { PreviousBookingDetailsComponent } from './previous-booking-details/previous-booking-details.component';
import { RegisteredSpotDetailsComponent } from './registered-spot-details/registered-spot-details.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'dashboard',component:NavbarComponent},
  {path:'dashboard/profile',component:ProfileComponent},
  {path:'dashboard/active',component:ActiveComponent},
  {path:'dashboard/previous',component:PreviousComponent},
  {path:'dashboard/registered',component:RegisteredComponent},

  
  {path: 'signup', component:SignupComponent},
  {path: 'signin', component:SigninComponent},

  {path:'dashboard/register-spots',component:RegisterSpotComponent},
  
  {path:'dashboard/book-spots',component:BookingDetailsFormComponent},
  {path:'dashboard/book-spots/customer-map',component:SearchmapComponent},
  {path:'active-booking-details',component:ActiveBookingDetailsComponent},
  {path:'prev-booking-details',component:PreviousBookingDetailsComponent},
 
  {path:'active-booking-details/qr-page',component:QrPageComponent},
  {path:'**',component:ErrorNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
