import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  readMore ="read more";
  pet = "Services";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }
  
  s = 0;
  toggleShowMore(){
    var toggler = document.getElementById("description");
    if(this.s == 0){
      this.s = 1;
      toggler.style.maxHeight = "1000px";
      this.readMore = "read less"
    }
    else{
      this.s = 0;
      toggler.style.maxHeight = "40px";
      this.readMore = "read more"
    }
  }

}
