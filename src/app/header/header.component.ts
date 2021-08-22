import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "Break'n News";
  date: Date = new Date();
  today = Date.now();

  constructor() { }
}
