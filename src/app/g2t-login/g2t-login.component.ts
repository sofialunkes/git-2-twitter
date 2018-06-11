import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'g2t-login',
  templateUrl: './g2t-login.component.html',
  styleUrls: ['./g2t-login.component.scss']
})

export class G2tLoginComponent implements OnInit {
  loginFormControl:FormGroup;
  matcher =  new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
    this.loginFormControl = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('',[
        Validators.minLength(6),
        Validators.required
      ])
    });
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}