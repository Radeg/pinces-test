import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailStatistic} from '../detail-statistic/detail-statistic';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class Home {

  constructor(private navCtrl: NavController) {

  }

  detailStatistic() {
    this.navCtrl.push(DetailStatistic);
  }
}
