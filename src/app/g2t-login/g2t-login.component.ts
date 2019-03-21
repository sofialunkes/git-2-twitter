import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'g2t-login',
  templateUrl: './g2t-login.component.html',
  styleUrls: ['./g2t-login.component.scss']
})

export class G2tLoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  hide = true;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.password = new FormControl('', [
      Validators.minLength(6),
      Validators.required
    ])
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }
}


// import * as moment from 'moment';
// import 'moment-timezone';

// export class DateFormatFilter {
//   formatMomentToScheduler(obj) {
//     const setdate = moment.tz(obj, 'America/Danmarkshavn');
//     return setdate.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
//   }
// }
