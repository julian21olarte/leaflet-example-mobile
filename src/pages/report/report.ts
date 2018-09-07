import { LocationProvider } from './../../providers/location/location';
import { MarkerProvider } from './../../providers/marker/marker';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import * as L from 'leaflet';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  public options: any;
  public layers: Array<any>;
  public marker: any;
  public map: any;
  public iconType: string;
  public firstSlide: boolean;
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams, public markerProvider: MarkerProvider, public locationProvider: LocationProvider) {
    this.iconType = 'arrow-forward';
    this.firstSlide = true;
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    this.map = L.map('map').fitWorld().setView([7.8939100, -72.5078200], 11);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      // tslint:disable-next-line:max-line-length
      //attribution: 'Cloud Analytic transport <a href="https://www.github.com/julian21olarte/">julian21olarte</a> - <a href="https://www.github.com/brayammora">brayammora</a>'
    }).addTo(this.map);

    this.marker = this.markerProvider.createMarker(7.8939100, -72.5071200, 'USER', 'Cucuta', {draggable: true});
    this.marker.addTo(this.map);


    // on drag marker event show latlng
    this.marker.on('dragend', (event) => {
      const coordenates = {
        lat: event.target._latlng.lat,
        lon: event.target._latlng.lng
      };
      console.log(coordenates);
    });

    // on marker popup is open
    this.marker.on('popupopen', (event) => {
      this.marker.setPopupContent(
        `<p>Lat: ${event.target._latlng.lat}</p>
        <p>Lng: ${event.target._latlng.lng}</p>`);
    });

    // on click map event for relocate marker
    this.map.on('click', (event) => {
      this.setMarkerPosition(event.latlng.lat, event.latlng.lng);
    });
  }

  // locate the marker and view on getLocation service is actived (with move animation)
  public locate() {
    this.locationProvider.getCoords()
    .then(coords => {
      console.log(coords);
      this.setMarkerPosition(coords.lat, coords.lng);
      this.map.setView(L.latLng(coords.lat, coords.lng), this.map.getZoom(), {
        "animate": true,
        "pan": {
          "duration": 3
        }
      });
    })
  }

  public nextForm() {

  }

  // set marker latitude and longitude
  private setMarkerPosition(lat: number, lng: number) {
    this.marker.setLatLng(L.latLng(lat, lng));
  }

  public nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext(500);
    this.slides.lockSwipes(true);
    if(this.slides.isEnd()) {
      this.iconType = 'checkmark';
    }
    if(this.slides.isBeginning()) {
      this.firstSlide = true;
    } else {
      this.firstSlide = false;
    }
  }

}
