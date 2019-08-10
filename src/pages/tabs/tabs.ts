import { Component } from '@angular/core';

import { InstrumentsPage } from '../instruments/instruments';
import { TradesPage } from '../trades/trades';
import { NewsPage } from '../news/news';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InstrumentsPage;
  tab2Root = TradesPage;
  tab3Root = NewsPage;
  tab4Root = SettingsPage;


  constructor() {

  }
}
