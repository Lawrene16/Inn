import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcctinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acctinfo',
  templateUrl: 'acctinfo.html',
})
export class AcctinfoPage {
  accountdetails;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accountdetails = this.navParams.get('info');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcctinfoPage');
  }

}
