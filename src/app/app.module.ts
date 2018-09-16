import { ComunityPage } from './../pages/comunity/comunity';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from './../pages/login/login';
import { Geolocation } from '@ionic-native/geolocation';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

//firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../firebase';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MarkerProvider } from '../providers/marker/marker';
import { LocationProvider } from '../providers/location/location';
import { HttpClientModule } from '@angular/common/http';
import { ReportProvider } from '../providers/report/report';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthProvider } from '../providers/auth/auth';
import { ReportPage } from '../pages/report/report';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    LeafletModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarkerProvider,
    AngularFireAuth,
    GooglePlus,
    LocationProvider,
    ReportProvider,
    AuthProvider
  ]
})
export class AppModule {}
