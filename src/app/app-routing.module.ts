import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { EventRouteActivateService } from './shared/event-route-activate.service';
import { EventListResolverService } from './shared/event-list-resolver.service';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { DemoJsComponent } from './simply-JS/demo-js/demo-js.component';
import { EventResolverService } from './shared/event-resolver.service';



const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolverService}},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'events/sessions/new', component: CreateSessionComponent},
  {path: 'jsdemo', component: DemoJsComponent},

  // lazy loading User module (profile component)
  {path: 'user', loadChildren: ()=> import('./user/user/user.module').then(mod => mod.UserModule)},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
