import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsListService } from '../events-list.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivateService implements CanActivate{

  constructor(private eventService: EventsListService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
                ): Observable<boolean> | Promise<boolean> | boolean {

                  // converting the eventExists to boolean type
              const eventExists = !!this.eventService.getEvent(+route.params['id'])
              if(!eventExists){
                this.router.navigate(['404'])
              }
            return eventExists 
  }
}

