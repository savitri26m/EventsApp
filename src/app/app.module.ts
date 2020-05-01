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
// import { LoginComponent } from './user/login/login.component';
// import { ProfileComponent } from './user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsItemComponent,
    HeaderComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    // LoginComponent,
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
