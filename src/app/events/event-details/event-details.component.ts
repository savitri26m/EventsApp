import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventsListService } from '../../events-list.service';
import { IEvent } from 'src/app/shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;

  constructor(private eventService: EventsListService,
          private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id  =  +this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(id);
  }

}
