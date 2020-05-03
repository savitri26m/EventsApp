import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsListService } from 'src/app/events-list.service';
import { IEvent } from 'src/app/shared/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;


  constructor(private router: Router,
    private eventService: EventsListService) { }

  event: any;

  ngOnInit(): void {
    this.event = {
      name: 'ng Spectacular',
      date: '12/12/2020',
      time: '10 am',
      price: 445.78,
      location: {
        address: '345 Happy St',
        city: 'Mumbai',
        country: 'India'
      },
      onlineUrl: 'https://ngSpectacular.com',
      imageUrl: 'https://ngSpectacular.com/logo.png'
    }

  }

  saveEvent(formValues: IEvent){
    // console.log(formValues)
    this.eventService.saveEventData(formValues);
    this.isDirty = false;
    this.router.navigate(["/events"]);
    
  }

  cancel(){
    this.router.navigate(["/events"]);
  }

}
