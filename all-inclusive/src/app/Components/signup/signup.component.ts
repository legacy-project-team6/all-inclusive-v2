import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
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
      this.userService.addNewCompany(companyInfo).subscribe((company) => {
        console.log("accounst successfully created", company);
      })
    }else{
      this.userService.addNewClient(clientInfo).subscribe((client) => {
        console.log("accounst successfully created", client);
      })
    }
  }

}
