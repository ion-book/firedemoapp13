import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private firebaseAnalytics: FirebaseAnalytics) {
    
  }

  ionViewDidLoad(){
    console.log("IonViewDidLoad");
    this.firebaseAnalytics.logEvent('page_view', {page: "home"})
    .then((res: any) => console.log("Respuesta: " + res))
    .catch((error: any) => console.error("Error: " + error));
  }
}
