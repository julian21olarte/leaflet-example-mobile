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
    return this.geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 3600000
    }).then(resp => {
      return { lat: resp.coords.latitude, lng: resp.coords.longitude };
    }).catch(error => {
      console.log(error);
      return { lat: 7.898229, lng: -72.487492 };
    });
  }

}
