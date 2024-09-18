import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgClass,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  focus: boolean | undefined;
  focus1: boolean | undefined;

  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(["home"])
  }
}
