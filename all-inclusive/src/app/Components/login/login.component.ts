import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  currentUser: any;
  view: "";
 
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
      type: "client"
    });
  }

  ngOnInit(): void {
  }
  onSubmit(userLoginInfo) {
    // console.log(userLoginInfo);
    if(userLoginInfo.type === 'client') {
      const user = {email: userLoginInfo.email, password: userLoginInfo.password}
      this.userService.logInClient(user).subscribe((results) => {
        this.currentUser = results;
        // console.log(this.currentUser)
        if(Object.keys(results).length) {
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
