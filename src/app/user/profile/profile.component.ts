import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private auth: AuthServiceService,
        private router: Router) { }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastname, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    }) 

  } //onInit ends

  saveProfile(formValue){
    if(this.profileForm.valid) {
      this.auth.updateUser(formValue.firstName, formValue.lastName)
      console.log("save profile: ", formValue.firstName, formValue.lastName)
    }
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  cancelUpdate(){
    this.router.navigate(['/events']);
  }

}
