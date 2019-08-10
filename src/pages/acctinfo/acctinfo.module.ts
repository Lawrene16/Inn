import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcctinfoPage } from './acctinfo';

@NgModule({
  declarations: [
    AcctinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AcctinfoPage),
  ],
})
export class AcctinfoPageModule {}
