import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  // @Input() company: any ;
  requests: any;
  company: any;
  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit(): void {
    this.company = this.userService.getCurrentUser()
    this.dataService.getAllDisableRequest().subscribe((requests)=>{
      this.requests = requests;
      console.log(requests);
    })
  }

}