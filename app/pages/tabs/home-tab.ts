import {Component} from '@angular/core';
import {Home} from '../home/home';
import {Rankings} from '../rankings/rankings';

@Component({
  templateUrl: 'build/pages/tabs/home-tab.html'
})
export class HomeTab {

  private homeRoot: any;
  private rankingsRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homeRoot = Home;
    this.rankingsRoot = Rankings;
  }
}
