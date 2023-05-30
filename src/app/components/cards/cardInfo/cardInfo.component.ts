import { Component, Input, OnInit, OnChanges } from '@angular/core';
import switchTimeZone from 'src/utils/time';

@Component({
  selector: 'app-cardInfo',
  templateUrl: 'cardInfo.component.html',
  styleUrls: ['cardInfo.component.css'],
})
export class CardInfoComponent implements OnChanges {
  @Input() infoWeather: any;
  country!: string;
  temp!: number;
  humidity!: number;
  description!: string;
  timezone!: number;
  visibility!: number;
  pressure!: number;
  temp_max!: number;
  sugges!: string;
  timeFormat: any;

  ngOnChanges() {
    this.country = this.infoWeather?this.infoWeather.sys.country:null;
    this.temp = this.infoWeather?this.infoWeather.main.temp:null;
    this.humidity = this.infoWeather?this.infoWeather.main.humidity:null;
    this.description = this.infoWeather?this.infoWeather.weather[0].description:null;
    this.timezone = this.infoWeather?this.infoWeather.timezone:null;
    this.visibility = this.infoWeather?this.infoWeather.visibility:null;
    this.pressure = this.infoWeather?this.infoWeather.main.pressure:null;
    this.temp_max = this.infoWeather?this.infoWeather.main.temp_max:null;
    this.timeFormat = switchTimeZone(this.timezone);
  }

  suggestion(): string {
    const temperature = this.temp - 273;
    if (temperature <= 10) {
      this.sugges = 'wear winter clothes';
    }
    if (temperature >= 11) {
      this.sugges = 'Wear comfortable clothing';
    }
    if (temperature >= 25) {
      this.sugges = 'Wear light clothing';
    }
    return this.sugges;
  }
}
