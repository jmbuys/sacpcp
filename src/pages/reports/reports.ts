import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'reports.html'
})
export class Reports {
  constructor(public nav: NavController) {

  }

  back() {
    this.nav.pop();
  }

}
