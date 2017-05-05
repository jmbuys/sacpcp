import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VolunteerEventsService } from '../../../lib/service/volunteer-events-service';
import { VolunteerEvent } from '../../../lib/model/volunteer-event';

@Component({
  templateUrl: 'reports.html'
})
export class Reports {
  public startdate:Date;
  public enddate: Date;
  public geteventserror:Boolean;
  public events:Array<VolunteerEvent>;
  constructor(public nav: NavController, public volunteerEventsService: VolunteerEventsService) {

  }

  back() {
    this.nav.pop();
  }
  getEventsTimeRange() {
    this.volunteerEventsService
      .getVolunteerEventsTimeRange(new Date(this.startdate.toString()), new Date(this.enddate.toString())).subscribe(
      events => {this.events = events;
      }, err => {this.geteventserror=true;
        console.log(err);
      },
      () => {this.events = this.events;
      });
      console.log (this.events);
  }
  exportevents(){
    this.volunteerEventsService.getVolunteerEvents().subscribe(events=>this.events=events,err=>this.geteventserror=true);
    console.log(this.events);
    console.log(this.startdate);
    console.log(this.enddate);
  }


}
