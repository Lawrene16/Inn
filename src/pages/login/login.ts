import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  id = "5303289";
  password = "sifonudo";

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.id == ""){
      this.presentToast("Invalid acct ID")
    }else if(this.password == ""){
      this.presentToast("Invalid Password")
    }else{
      let load = this.loadingCtrl.create({
        content: 'Please wait',
      });
      load.present()
      if(this.id == "80018006" && this.password == "kinghenry"){

        setTimeout(() => {
        this.storage.set('index', 0);
        this.navCtrl.push(TabsPage)
        load.dismiss()
        }, 5000);
      }

      else if(this.id == "5303289" && this.password == "sifonudo"){

        setTimeout(() => {
          this.storage.set('index', 1);
          this.navCtrl.push(TabsPage);
        load.dismiss()

        }, 5000);


      }

      else{

        setTimeout(() => {
          this.presentToast("Invalid account details")
          load.dismiss()
        }, 5000);

      }



    }
  }

  presentToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top'
    });

    toast.present();
  }
}
