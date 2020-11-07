import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm;
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
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
    this.userService.getAllClients().subscribe((clients: any[])=>{
      console.log(clients)
    })
    this.userService.getAllCompanies().subscribe((companies: any[])=>{
      console.log(companies)
    })
  }

  onSubmit(userInfo) {
    console.log(userInfo);
    const companyInfo ={
    type: userInfo.type,
    name: userInfo.name,
    emailCompany: userInfo.email,
    passwordCompany: userInfo.password,
    phoneNumberCompany: userInfo.phoneNumber,
    adress: userInfo.address,
    imgUrlCompany: "http://company.jpg",
    }
    const clientInfo ={
      type: userInfo.type,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      password: userInfo.password,
      phoneNumber: userInfo.phoneNumber,
      specialNeed: userInfo.specialNeed,
      imgUrl: "http://client.jpg",
    }
    if(userInfo.type === "company") {
      this.userService.addNewCompany(companyInfo).subscribe((company: any) => {
        if(company.message) {
          alert(company.message)
          return;
        }
        console.log("account successfully created", company);
        this.router.navigate(['login'])
      })
    }else{
      this.userService.addNewClient(clientInfo).subscribe((client:any) => {
        if(client.message) {
          alert(client.message)
          return;
        }
        console.log("account successfully created", client);
        this.router.navigate(['login'])
      })
    }
    
  }

}
