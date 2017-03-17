import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'create-event.html'
})
export class CreateEvent {
  constructor(public nav: NavController) {

  }

  back() {
    this.nav.pop();
  }

}
