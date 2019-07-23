import { Component,ViewChild, ElementRef, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HubsProvider } from '../../providers/hubs/hubs';
import { LoadingController } from "ionic-angular";
import { AlertController } from "ionic-angular";

declare var google;
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage{

  constructor(public navCtrl: NavController, public navParams: NavParams,public hub :HubsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
