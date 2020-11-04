import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  user: {};
  company: {};
  view: "";
 
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
      type: ""
    });
  }

  ngOnInit(): void {
  }
  onSubmit(userLoginInfo) {
    console.log(userLoginInfo);
  }
  changeView(option) {
    this.view = option;
  }

}
