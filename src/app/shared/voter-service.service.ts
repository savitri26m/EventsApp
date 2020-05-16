import { Injectable } from '@angular/core';
import { ISessions } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class VoterServiceService {

  constructor() { }

  deleteVoter(session: ISessions, voterName: string){
    session.voters = session.voters?.filter( v => v !== voterName);
    // receives the list of user name who is not the current user.
  }

  addVoter(session: ISessions, voterName: string){
    session.voters?.push(voterName);
    console.log("Add votes", session.voters?.length)
    // adding the current user to voters list
  }

  userVoted(session: ISessions, voterName: string){
   return session.voters?.some(v => v === voterName);
  //  some method returns a boolean when there is an element that matches a condition
  // value of current element of the array is same as the voterName string passed, returns true, else fasle
  }

}
