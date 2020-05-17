import { Injectable } from '@angular/core';
import { ISessions } from './event.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterServiceService {

  constructor(private http: HttpClient) { }

  deleteVoter(eventId: number ,session: ISessions, voterName: string){
    // receives the list of user name who is not the current user.
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    session.voters = session.voters?.filter( v => v !== voterName);
    this.http.delete(url).pipe(
      catchError(this.handleError('deleteVoter'))).subscribe();
  }

  addVoter(eventId: number ,session: ISessions, voterName: string){
    // adding the current user to voters list
    session.voters?.push(voterName);
    const options = { headers: new HttpHeaders({'Content-Type':  'application/json'}) };
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, {}, options).pipe(
      catchError(this.handleError('addVoter'))).subscribe()
  }

  userVoted(session: ISessions, voterName: string){
   return session.voters?.some(v => v === voterName);
  //  some method returns a boolean when there is an element that matches a condition
  // value of current element of the array is same as the voterName string passed, returns true, else fasle
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }

}
