import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-validation',
  templateUrl: './app.formvalidation.html',
   styleUrls: ['./app.formvalidation.css']
})

export class FormValidationComponent {
  complexForm : FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'description' : [null, Validators.required],
      'technology': [null,  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'level' : [null, Validators.required],
    })
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe( (form: any) => {
      console.log('form changed to:', form);
    }
    );
  }

  submitForm(value: any){
    console.log(value);
  }
}