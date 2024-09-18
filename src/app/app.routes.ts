import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LandingComponent} from "./home/landing/landing.component";
import {LoginComponent} from "./security/login/login.component";
import {RegisterComponent} from "./security/register/register.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path:'',
        component: LandingComponent
      }
    ]
  }
];
