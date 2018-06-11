import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'login-g2t',
  templateUrl: './login-g2t.component.html',
  styleUrls: ['./login-g2t.component.scss']
})

export class LoginG2tComponent implements OnInit {
  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email,
  ]);
  matcher =  new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}