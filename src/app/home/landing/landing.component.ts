import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  focus: any;
  focus1: any;

}
