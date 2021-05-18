import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class MatchpassService {

  constructor() { }

  MatchpassValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        
        if(!control || !matchingControl){
          return null;
        }
        if (matchingControl.errors && !matchingControl.errors.MatchpassValidator) {
          return;
      }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ MatchpassValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }


  // MatchpassValidator(controlName: AbstractControl,matchingControlName: AbstractControl): {[key:string]:any} | null{
  //       const control  :string = controlName.value;
  //       const matchingControl = matchingControlName.value;
  //               if(!control || !matchingControl){
  //                         return null;
  //               }
  //               if (matchingControl.errors && !matchingControl.errors.MatchpassValidator) {
  //                 return null;
  //               }
  //               if (control !== matchingControl) {
  //                  return{ MatchpassValidator: true };
  //               } else {
  //                 return{ MatchpassValidator: true };
  //               }
  // }
}
