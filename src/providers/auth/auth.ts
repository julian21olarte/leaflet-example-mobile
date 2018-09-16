import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthCredential } from '@firebase/auth-types';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import 'rxjs/add/operator/take';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public currentUser: any;
  public currentUserObservable: BehaviorSubject<any>;
  private CORDOVA: string = 'cordova';
  constructor(public http: HttpClient,
    private fireAuth: AngularFireAuth,
    private database: AngularFirestore,
    private platform: Platform,
    private googlePlus: GooglePlus) {
    console.log('Hello AuthProvider Provider');
    if (localStorage.getItem('currentUser') !== null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    this.currentUserObservable = new BehaviorSubject(false);
  }

  public loginGoogle() {
    if (this.platform.is(this.CORDOVA)) {
      return this.nativeGoogleLogin();
    } else {
      return this.webGoogleLogin();
    }
  }

   /**
   * Native Google login
   */
  private async nativeGoogleLogin() {
      await this.fireAuth.auth.signInAndRetrieveDataWithCredential(await this.getGoogleCredential());
      const user = await this.loginUser();
      this.setCurrentUser(user);
      return user;
  }

    /**
   * Web Google login
   */
  private async webGoogleLogin() {
      await this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      const user = await this.loginUser();
      this.setCurrentUser(user);
      return user;
  }

  private async getGoogleCredential() {
    const gplusUser = await this.googlePlus.login({
      'webClientId': '144809825435-seqkqitbmjkm0t32pr49vk2n8rct12al.apps.googleusercontent.com',
      'offline': true,
      'scopes': 'profile email'
    });
    return firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken);
  }

    /**
   * setCurrentUser
   * @param user new User
   */
  private setCurrentUser(user: any = null) {
    this.currentUserObservable.next(user);
  }

  /**
   * get The current User in System
   */
  public getCurrentUser(): Observable<any> {
    if(this.currentUser && localStorage.getItem('currentUser') !== null) {
      this.setCurrentUser(this.currentUser);
    }
    return this.currentUserObservable.asObservable();
  }

  private async loginUser() {
    const fireUser = this.fireAuth.auth.currentUser;

    // fill User
    this.currentUser = {
      uid: fireUser.uid,
      points: 0,
      name: fireUser.displayName,
      fullname: fireUser.displayName,
      email: fireUser.email,
      image: fireUser.photoURL
    };
    const firestoreUserRef = this.database.doc('users/'+fireUser.uid);
    const firestoreUser = await firestoreUserRef
      .valueChanges()
      .take(1)
      .toPromise();

    firestoreUser
      ? this.currentUser = firestoreUser
      : firestoreUserRef.set(this.currentUser);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    return this.currentUser;
  }

}
