import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventsListService } from '../events-list.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {

  constructor(private eventService: EventsListService) { }

  resolve(route: ActivatedRouteSnapshot){
    return this.eventService.getEvent(route.params['id'])
    //same as named in route parameter in app-routing
  }
}
