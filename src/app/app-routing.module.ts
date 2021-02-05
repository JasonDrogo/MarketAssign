import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';

import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  {path:'',component:NavbarComponent,children :[
    {path : '',component : LandingComponent},
    {path :'contact' ,component : ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
