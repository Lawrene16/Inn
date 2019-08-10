import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InstrumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instruments',
  templateUrl: 'instruments.html',
})
export class InstrumentsPage {

  quotes = ['EUR', 'USD', 'CAD', 'AUD', 'GBP', 'NZD', 'ZAR'];
  icons = [{icon:'arrow-up', color:'secondary', tc: "#32db64"}, {icon:'arrow-down', color:'danger', tc: "#f53d3d"}]

  instruments = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    for (let i = 0; i < 25; i++) {
      this.instruments.push({
        icon: this.icons[this.getRandomInt(0,1)],
        pair: this.quotes[this.getRandomInt(0, this.quotes.length-1)] + '/' + this.quotes[this.getRandomInt(0, this.quotes.length-1)],
        baseprice: '1.' + this.getRandomInt(1876, 9086),
        // quoteprice: Number(bp)+ Number(this.getRandomInt(0.001,0.009))
        quoteprice: '1.' + this.getRandomInt(1876, 9086)
      })
    }

    console.log(this.instruments)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstrumentsPage');
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
