import { Component, OnInit, Input } from '@angular/core';
import { ISessions } from 'src/app/shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
// getting array of sessions as input from eventsList
  @Input() sessions: ISessions[];

  constructor() { }

  ngOnInit(): void {
  }

}
