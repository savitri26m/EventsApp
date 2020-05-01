import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/shared/event.model';

@Component({
  selector: 'app-events-item',
  templateUrl: './events-item.component.html',
  styleUrls: ['./events-item.component.css']
})
export class EventsItemComponent implements OnInit {

  @Input() eventItem: IEvent;
  testString: string = 'I am string';
  
  constructor() { }

  ngOnInit(): void {
  }

  getStartTimeClass() {
    const isEarly = this.eventItem && this.eventItem.time === '8:00 am';
    return {green: isEarly, bold: isEarly}
  }

}
