import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradesPage } from './trades';

@NgModule({
  declarations: [
    TradesPage,
  ],
  imports: [
    IonicPageModule.forChild(TradesPage),
  ],
})
export class TradesPageModule {}
