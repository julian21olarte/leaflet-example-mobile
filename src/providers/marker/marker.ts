import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers';

/*
  Generated class for the MarkerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarkerProvider {

  constructor() {
    L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';
    console.log('Hello MarkerProvider Provider');
  }

  public createMarker(lat, lng, type, popupText = null, options = {}) {
    const marker = L.marker([ lat, lng ], this.getMarkerOptions(type, options));
    return popupText ? marker.bindPopup(popupText) : marker;
  }


  private getMarkerOptions(type, options) {
    return {
      ...options,
      icon:  L.AwesomeMarkers.icon(this.getIconOptions(type))
    };
  }

  private getIconOptions(type) {
    switch (type) {
      case 'SUCCESS': return {icon: 'location-arrow', markerColor: 'green'};
      case 'DANGER':  return {icon: 'exclamation', markerColor: 'red'};
      case 'INFO':    return {icon: 'info', markerColor: 'blue'};

      case 'TRASH':    return {icon: 'trash', markerColor: 'brown'}; //basuras
      case 'HOLE':    return {icon: 'road', markerColor: 'black'}; //hueco
      case 'VILLAIN':    return {icon: 'user-secret', markerColor: 'black'}; //ladron
      case 'CRASH':    return {icon: 'car-crash', markerColor: 'red'}; //accidente
      case 'BAD_ROAD':    return {icon: 'road', markerColor: 'yellow'}; //via en mal estado
      case 'TRAFFIC':    return {icon: 'traffic-light', markerColor: 'blue'}; //embotellamiento

      case 'USER':    return {icon: 'user', markerColor: 'blue'}; //usuario
    }
  }

}
