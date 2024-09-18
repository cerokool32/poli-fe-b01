import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  test : Date = new Date();
  focus: boolean | undefined;
  focus1: boolean | undefined;
  focus2: boolean | undefined;

  constructor(private router: Router) {
  }

  register(): void {
    this.router.navigate(["home"])
  }

}
