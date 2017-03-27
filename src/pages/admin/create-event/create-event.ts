import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Component({
  templateUrl: 'create-event.html'
})
export class CreateEvent implements OnInit{
  states;
  constructor(public nav: NavController,
    private http: Http) {
  	
  }


  ngOnInit(){
    //this.http.get('json/states.json')
    //        .map(res => {
    //          console.log(res.json())
    this.http.get('./assets/json/states.json').toPromise().then(res => {
    this.states  = res.json();
})
           
            .catch((error: any) => Observable.throw(error || 'Server error'));
    
  }



}


