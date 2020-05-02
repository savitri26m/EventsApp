import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsListService } from 'src/app/events-list.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  constructor(private router: Router,
    private eventService: EventsListService) { }

  newEvent: any;

  ngOnInit(): void {
  }

  saveEvent(formValues){
    // console.log(formValues)
    this.eventService.saveEventData(formValues);
    this.isDirty = false;
    this.router.navigate(["/events"]);
    
  }

  cancel(){
    this.router.navigate(["/events"]);
  }

}
