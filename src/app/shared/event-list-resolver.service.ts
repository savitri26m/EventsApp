import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { EventsListService } from '../events-list.service';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventSevice: EventsListService) { }

  resolve() {
    return this.eventSevice.getEventList()

    // here we want to return observale to the resolve method, so we are not using subscribe method,
    // subscribe returns subscription not observable, map acts as subscribe
  }
}
