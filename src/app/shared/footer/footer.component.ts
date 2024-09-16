import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DatePipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    DatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  test : Date = new Date();

  constructor() {}

  ngOnInit() {

  }
}
