import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LandingComponent} from "./home/landing/landing.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path:'landing',
        component: LandingComponent
      }
    ]
  }
];
