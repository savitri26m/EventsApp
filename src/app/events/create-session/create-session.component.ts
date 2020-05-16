import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ISessions, IEvent } from 'src/app/shared/event.model';



// function restrictedWords(words ) : ValidatorFn {
//   return (c: AbstractControl): {[key: string]: boolean} | null => {
//     if(!words) return null

//     var invalidWords = words.map( w => c.value.includes(w) ?  w : null)

//     return invalidWords && invalidWords.length > 0 ? 
//       { 'restrictedWords': invalidWords.join(', ') } : null
//   }
// }

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Output() saveNewSession = new EventEmitter<ISessions>();
  @Output() oncancelSession = new EventEmitter<ISessions>();

  session = new ISessions();

  sessionForm: FormGroup;

  ngOnInit(): void {
    this.sessionForm = this.fb.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', [Validators.required, Validators.maxLength(50)] ]
    })

    console.log(this.sessionForm);
  }

  saveSession(sessionValues: ISessions){
    console.log(sessionValues);
    this.session = {
      id: undefined,
      presenter: sessionValues.presenter,
      duration: +sessionValues.duration,
      level: sessionValues.level,
      abstract: sessionValues.abstract,
      name: sessionValues.name,
      voters: []
    }
    console.log(this.session);
    this.saveNewSession.emit(this.session);
  }

  cancelSession(){
    this.oncancelSession.emit();
  }

}
