import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AcctinfoPage } from "../acctinfo/acctinfo";
import { Storage } from "@ionic/storage";
import { LoginPage } from "../login/login";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  // people = ['kingsley', 'sifon', 'daramfon']

  detailstoload = {
    owner: "",
      details: {
        name: "",
        acctnumber: "",
        accttype: "",
        balance: "",
        leverage: "",
        acctstatus: ""
  }
};

  acctsinfo = [
    {
      owner: "kingsley",
      details: {
        name: "Kingsley Henry Mfon",
        acctnumber: "80018006",
        accttype: "Real Account",
        balance: "0.12",
        leverage: "1:500",
        acctstatus: "Verified"
      }
    },

    {
      owner: "sifon",
      details: {
        name: "Sifon Udo",
        acctnumber: "5303289",
        accttype: "Real Account",
        balance: "1.3",
        leverage: "1:100",
        acctstatus: "Verified"
      }
    }
  ];

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams
  ) {


  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
    this.storage.get("index").then(res => {
    this.detailstoload = this.acctsinfo[res];
    });


  }

  openinfopage() {
    this.navCtrl.push(AcctinfoPage, { info: this.detailstoload });
  }

  logout(){
    this.navCtrl.push(LoginPage)
  }
}
