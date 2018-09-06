import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

  constructor(public http: HttpClient, public geolocation: Geolocation) {
    console.log('Hello LocationProvider Provider');
  }

  public getCoords() {
    return this.geolocation.watchPosition({
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 3600000
    });
  }

}
