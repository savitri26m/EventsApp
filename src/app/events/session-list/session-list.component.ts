import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISessions } from 'src/app/shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
// getting array of sessions as input from eventsList
  @Input() sessions: ISessions[];
  @Input() filterBySession: string;

  visibleSessions: ISessions[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // checking if session exists then only detect for changes
    if(this.sessions){
      this.filterSession(this.filterBySession);
    }
  }

  filterSession(filter: string){
    if(filter === 'all' ){
      this.visibleSessions = this.sessions.slice(0);
      console.log(this.visibleSessions);
      console.log('test')
    }else{
      this.visibleSessions = this.sessions.filter(s => {
        return s.level.toLocaleLowerCase() === filter
      })
    }

  }
}
