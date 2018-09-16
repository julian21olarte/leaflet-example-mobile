import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the ReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportProvider {
  private currentReport: any;
  constructor(public http: HttpClient, private firestore: AngularFirestore,) {
    console.log('Hello ReportProvider Provider');
  }

  public sendReport(report: any) {
    this.firestore.collection('reports').add(report);
  }

  public getCurrentReport() {
    return this.currentReport
  }

  public setCurrentReport(report: any) {
    this.currentReport = report;
  }
}
