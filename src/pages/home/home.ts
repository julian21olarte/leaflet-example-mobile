import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public goToNewReport() {
    this.navCtrl.push('ReportPage');
  }

}
