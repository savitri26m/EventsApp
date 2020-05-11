import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LocationValidatorDirective,
    multi: true // this tells angular we are adding our custom validator along with default NG_VALIDATORS
  }]
})
export class LocationValidatorDirective implements Validator {

  validate(formGrp: FormGroup): { [key: string]: any} {
    let addressControl = formGrp.controls['address'];
    let cityControl = formGrp.controls['city'];
    let countryControl = formGrp.controls['country'];
    let onlineUrlControl = (<FormGroup>formGrp.root).controls['onlineUrl']; 
    //type of root is FormGroup, so we need to specify that. Here we are going one level up from the" location" formGroup to the parent element, and coming down to onlineUrl

    if( (addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl )  || (onlineUrlControl && onlineUrlControl.value) ){
      return null;
    }
    else{
      return {appLocationValidator : false}
    }
  }

  constructor() { }

}
