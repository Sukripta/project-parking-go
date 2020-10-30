import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponent } from './dashboard/active/active.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { PreviousComponent } from './dashboard/previous/previous.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { RegisteredComponent } from './dashboard/registered/registered.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'dashboard',component:NavbarComponent},
  {path:'dashboard/profile',component:ProfileComponent},
  {path:'dashboard/active',component:ActiveComponent},
  {path:'dashboard/previous',component:PreviousComponent},
  {path:'dashboard/registered',component:RegisteredComponent},
  {path:'dashboard/register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
