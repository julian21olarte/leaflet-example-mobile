import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportProvider } from '../../providers/report/report';

/**
 * Generated class for the ViewReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-report',
  templateUrl: 'view-report.html',
})
export class ViewReportPage {

  public report: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public reportProvider: ReportProvider) {
    this.report = this.reportProvider.getCurrentReport();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewReportPage');
  }

}
