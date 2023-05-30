import { Component, OnInit } from '@angular/core';
import { ServiceUsers } from '../services/serviceUsers';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherCurrent: any;

  constructor(private serviceUsers: ServiceUsers) {}


  ngOnInit() {
    this.serviceUsers.getUsers( ).subscribe((res) => {
      this.weatherCurrent = res;
      console.log(this.weatherCurrent);
    });
  }
}
