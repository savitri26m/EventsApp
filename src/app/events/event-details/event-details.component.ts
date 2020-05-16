import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { EventsListService } from '../../events-list.service';
import { IEvent, ISessions } from 'src/app/shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  ifSession: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';


  constructor(private eventService: EventsListService,
          private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id  =  +this.route.snapshot.params['id'];
    // this.event = this.eventService.getEvent(id);
    console.log("type of: ", typeof id, id);

    // this.route.params.forEach(
    //   (data: Params) => {
    //     this.eventService.getEvent(+data['id']).subscribe(
    //       (eventData: IEvent) => {
    //         this.event = eventData
    //         this.ifSession = false;
    //       }
    //     )
    //     console.log(data);
    //   }
    // )


    this.route.data.forEach((data) => {
        this.event = data['event'] // same name as the one passed to resolve param in app-routing file
        this.ifSession = false;        
        console.log(data);
      }
    )
  }

    // const id = +this._aRoute.snapshot.params['id'];
    // console.log("type of: ", typeof id);
    // this.server = this.serversService.getServer(2);
    // this._aRoute.params.subscribe(
    //   (data: Params) => {
    //     this.server = this.serversService.getServer(+data['id']);
    //   }
    // )

  addSession(){
    this.ifSession = true;
  }

  addNewSession(sessionData: ISessions){
    // getting the last session id of the sessions in an event
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    sessionData.id = nextId; // adding session id to new created session
    this.event.sessions.push(sessionData); // adding newly created session 
    this.eventService.saveEventData(this.event).subscribe(); //updating event on which session is added
    this.ifSession = false // after saving showing the sessionsList
  }

  // on cancelling session displaying the sessions list 
  cancelAddSession(){
    this.ifSession = false; 
  }

}
