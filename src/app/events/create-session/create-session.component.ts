import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISessions } from 'src/app/shared/event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  session = new ISessions();

  sessionForm: FormGroup;

  ngOnInit(): void {
    this.sessionForm = this.fb.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', [Validators.required, Validators.maxLength(500)]]
    })
  }

  saveSession(sessionValues){
    console.log(sessionValues);
    this.session = {
      id: undefined,
      presenter: sessionValues.presenter,
      duration: +sessionValues.duration,
      level: sessionValues.level,
      abstract: sessionValues.abstract,
      name: sessionValues.name
    }
    console.log(this.session);
  }

}
