import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the TradesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-trades",
  templateUrl: "trades.html"
})
export class TradesPage {
  ticketsarray = [
    {
      index: "0",
      tickets: [
        '876393878',
        '008763938',
        '008763957',
        '008463938',
        '008768557',
        '106963938',
        '18273482',
        '993874593',
        '008768557',
        '38273482',
        '993873593',
        '008768557',
        '389458933',
        '893498734',
        '993873593',
        '6783483498',
        '934789834',
        '348793722',
        '6876923742',
        '008763957',
        '7423987234'
      ]
    },

    {
      index: "1",
      tickets: [
        "6973129867",
        "7127236775",
        "7038085556",
        "6967009027",
        "7245861525",
        "7165659973",
        "7295911000",
        "7148525985",
        "7249575013",
        "6917158175",
        "6941407608",
        "6901964911",
        "7342838250",
        "7001370639",
        "7170899397",
        "6951013832",
        "6968984893",
        "6899242653",
        "7194217282",
        "7014957806",
        "7007793061"
      ]
    }
  ];
  index = "0";
  currentbalance = "";
  volumedivider;
  balances = ["0.12", "0.03"];
  numberoftrades = 21;
  types = [
    "Account Funding + Instaforex Startup Bonus",
    "buy",
    "buy",
    "sell",
    "sell",
    "buy",
    "sell",
    "buy",
    "buy",
    "buy",
    "buy",
    "sell",
    "sell",
    "buy",
    "Instaforex Bonus Withdrawal",
    "sell",
    "buy",
    "buy",
    "sell",
    "sell",
    "buy"
  ];
  symbolstraded = [
    "-",
    "EURUSD",
    "GBPJPY",
    "EURUSD",
    "EURNZD",
    "EURCAD",
    "GBPJPY",
    "GBPAUD",
    "BTCCAD",
    "GBPJPY",
    "NZDAUD",
    "EURJPY",
    "AUDJPY",
    "NZDCAD",
    "-",
    "XAUUSD",
    "EURUSD",
    "GBPJPY",
    "EURUSD",
    "EURNZD",
    "XAUUSD"
  ];
  volumes = [
    "-",
    "0.1",
    "0.1",
    "0.1",
    "1.0",
    "0.1",
    "0.15",
    "1.0",
    "0.51",
    "0.15",
    "1.0",
    "0.51",
    "1.27",
    "2.0",
    "-",
    "1.0",
    "0.1",
    "0.1",
    "0.1",
    "1.0",
    "5.0"
  ];
  sls = [
    '-',
    '0.99674',
    '1.99674',
    '-',
    '-',
    '-',
    '1.99674',
    '-',
    '-',
    '1.99674',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '0.99674',
    '1.99674',
    '-',
    '-',
    'Margin Call'
  ];
  alltrades = [];

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.storage.get("index").then(res => {
      console.log(res);
      this.currentbalance = this.balances[res];

      if (res == 0) {
        this.volumedivider = 1;
      } else if (res == 1) {
        this.volumedivider = 2.5;
      }

      for (let i = 0; i < this.numberoftrades; i++) {
        if (this.volumes[i] != "-") {
          this.volumes[i] = "" + Number(this.volumes[i]) / this.volumedivider;
        }

        this.alltrades.push({
          ticket: this.ticketsarray[res].tickets[i],
          type: this.types[i],
          volume: this.volumes[i],
          sl: this.sls[i],
          tp: "-",
          symbol: this.symbolstraded[i],
          date: "",
          profit: ""
        });
      }
    });

    console.log(this.alltrades);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
