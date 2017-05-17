import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VolunteerEventsService } from '../../../lib/service/volunteer-events-service';
import { VolunteerEvent } from '../../../lib/model/volunteer-event';
import 'rxjs/Rx';

@Component({
  templateUrl: 'reports.html'
})
export class Reports {
  public startDate:Date;
  public endDate: Date;
  public getEventsError:Boolean;
  public events:Array<VolunteerEvent>;
  constructor(public nav: NavController, public volunteerEventsService: VolunteerEventsService) {

  }
  back() {
    this.nav.pop();
  }
  exportEvents(){
    this.volunteerEventsService.getEventsReport({'start': this.startDate, 'end': this.endDate}).subscribe(data => this.downloadFile(data), err => this.getEventsError = true);
  }
  downloadFile(data) {
    var blob = new Blob([data],{type:'text/csv'});
    var url = window.URL.createObjectURL(blob);
    window.open(url);
  }


}
