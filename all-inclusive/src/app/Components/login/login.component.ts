import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  // currentUser= {} as any;
  view: "";
 
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
      type: "client"
    });
  }

  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser() || {}
    console.log(currentUser)
    if(Object.keys(currentUser).length) {
      this.router.navigate([currentUser.type]);
    }
  }
  onSubmit(userLoginInfo) {
    // console.log(userLoginInfo);
    if(userLoginInfo.type === 'client') {
      const user = {email: userLoginInfo.email, password: userLoginInfo.password}
      this.userService.logInClient(user).subscribe((results:any) => {
        this.userService.setCurrentUser(results);
        if(Object.keys(results).length) {
          this.router.navigate([results.type]);
          console.log('success')
        } else {
          alert("Please verify your email and/or password, and if you don't have an account please sign up!")
        }
      })
    }
    else if(userLoginInfo.type === 'company') {
      const company = {emailCompany: userLoginInfo.email, passwordCompany: userLoginInfo.password}
      this.userService.logInCompany(company).subscribe((results:any) => {
        this.userService.setCurrentUser(results);
        if(Object.keys(results).length) {
          this.router.navigate([results.type]);
          console.log('success')
        } else {
          alert("Please verify your email and/or password, and if you don't have an account please sign up!")
        }
      })
    }
  }
  changeView(option) {
    this.view = option;
  }

}
