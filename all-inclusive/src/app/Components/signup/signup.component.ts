import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm;
  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      specialNeed: false,
      type: "client",
      address: "",
      name: ""
    });
  }

  ngOnInit(): void {
  }
  onSubmit(userInfo) {
    console.log(userInfo);
  }

}
