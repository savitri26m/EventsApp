import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { doesNotReject } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  currentUser: IUser;

  constructor() { }

  // setting up fake user for fake authentication
  loginUser(username: string, password: string){
    this.currentUser = {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      username: username
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  updateUser(fname: string, lname: string){
    this.currentUser.firstname = fname
    this.currentUser.lastname = lname
    console.log("updated user: ", fname)
  }

}
