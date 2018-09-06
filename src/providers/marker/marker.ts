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
      case 'HOLE':    return {icon: 'road', markerColor: 'black'};
    }
  }

}
