import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the PointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-points',
  templateUrl: 'points.html',
})
export class PointsPage {

  public points: number;
  public timer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public cdr: ChangeDetectorRef) {
    this.points = 20;
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointsPage');
    /*this.timer = setInterval(function() {
      console.log(this.points);
      this.points++;
      this.cdr.detectChanges();
      if(this.points == 20) {
        clearInterval(this.timer);
      }
    }, 500);*/
  }

  public goComunity() {
    //this.navCtrl.setRoot('ComunityPage');
    this.app.getRootNav().getActiveChildNav().select(1);
  }
}
