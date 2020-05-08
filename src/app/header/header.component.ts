import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../shared/auth-service.service';
import { ISessions } from '../shared/event.model';
import { EventsListService } from '../events-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm: string= "";
  foundSession: ISessions[];
 

  constructor(public auth: AuthServiceService, 
      public eventService: EventsListService) { }

  ngOnInit(): void {}

  searchSession(searchedTerm: string){
    this.eventService.searchSessions(searchedTerm).subscribe(
      sessionData => { 
        this.foundSession = sessionData;
        // console.log(this.foundSession);
      }
    )}

}
