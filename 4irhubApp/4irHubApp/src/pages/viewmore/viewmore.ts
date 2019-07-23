import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ViewmorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewmore',
  templateUrl: 'viewmore.html',
})
export class ViewmorePage {
  images=[
    {image:'../../assets/imgs/South-African-Parliament-AT-1030x691.jpg'},
    {image:'../../assets/imgs/Austria_Parlament_Front.jpg'},
    {image:'../../assets/imgs/unnamed.jpg'},
    {image:'../../assets/imgs/South-African-Parliament-AT-1030x691.jpg'},
    {image:'../../assets/imgs/Austria_Parlament_Front.jpg'},
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewmorePage');
  }
  search(){
    this.navCtrl.push(SearchPage)
  }
}
