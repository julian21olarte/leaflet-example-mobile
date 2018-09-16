import { ReportProvider } from './../../providers/report/report';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comunity',
  templateUrl: 'comunity.html',
})
export class ComunityPage {

  public myReports: Array<any>;
  public otherReports: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public reportProvider: ReportProvider) {
    this.myReports = [
      {title: 'Accidente en Guaimaral', description: '2 automoviles chocaron', image: 'accidente.jpg', status: true, comments: ['Ya se arreglo, no hubo heridos.', 'Que bueno']},
      {title: 'Embotellamiento en Libertadores', description: 'hay un embotellamiento cerca a unicentro', image: 'trancon.jpg', status: false, comments: ['Esta desde las 10AM']}
    ];
    this.otherReports = [
      {title: 'Accidente en Guaimaral', description: '2 automoviles chocaron', image: 'accidente.jpg', status: true},
      {title: 'Embotellamiento en Libertadores', description: 'hay un embotellamiento cerca a unicentro', image: 'trancon.jpg', status: false, comments: ['Ya llego transito para despejar la via.']}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComunityPage');
  }

  public goToReport(report: any) {
    this.reportProvider.setCurrentReport(report);
    this.navCtrl.setRoot('ViewReportPage');
  }
}
