import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LandingComponent} from "./home/landing/landing.component";
import {LoginComponent} from "./security/login/login.component";
import {RegisterComponent} from "./security/register/register.component";
import {AdminComponent} from "./home/admin/admin.component";
import {UserComponent} from "./home/user/user.component";
import {PaymentComponent} from "./home/payment/payment.component";
import {ContactComponent} from "./home/contact/contact.component";

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
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path:'payment',
        component: PaymentComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];
