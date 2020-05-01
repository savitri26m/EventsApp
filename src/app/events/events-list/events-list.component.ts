import { Component, OnInit } from '@angular/core';
import { EventsListService } from '../../events-list.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/shared/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];
  constructor(private eventList: EventsListService, 
          private route: ActivatedRoute) { }

  ngOnInit(): void {
    // accessing data from resolver 
    this.events = this.route.snapshot.data['events'];

    // this.eventList.getEventList().subscribe(
    //    data => {
    //      this.events = data;
    // })

  }

}
