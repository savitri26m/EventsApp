import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsItemComponent } from './events/events-item/events-item.component';
import { HeaderComponent } from './header/header.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionListComponent } from './events/session-list/session-list.component';
import { CollapsableWellComponent } from './events/collapsable-well/collapsable-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

declare var $: any;

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsItemComponent,
    HeaderComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    // LoginComponent,
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
