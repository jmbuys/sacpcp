import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'contact-volunteers.html'
})
export class ContactVolunteers {
  constructor(public nav: NavController) {

  }

  back() {
    this.nav.pop();
  }

}
