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
  @Input() sortByValue: string;
 
  visibleSessions: ISessions[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // checking if session exists then only detect for changes
    if(this.sessions){
      this.filterSession(this.filterBySession);
      this.sortByValue === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc)
    }
  }

  filterSession(filter: string){
    if(filter === 'all' ){
      this.visibleSessions = this.sessions.slice(0);
    }else{
      this.visibleSessions = this.sessions.filter(s => {
        return s.level.toLocaleLowerCase() === filter
      })
    }
  }

  sortByNameAsc(s1: ISessions, s2: ISessions){
    if(s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
  }

  sortByVotesDesc(s1: ISessions, s2: ISessions) {
    return s2.voters.length - s1.voters.length;
  }

}
