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
  user: any;
  company: {};
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
        // console.log(results) 
        if(Object.keys(results).length) {
          console.log('success')
        } else {
          console.log('failed')
        }
        
        
      })
    }
  }
  changeView(option) {
    this.view = option;
  }

}
