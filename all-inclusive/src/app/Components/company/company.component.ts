import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  // @Input() company: any ;
  company: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.company = this.userService.getCurrentUser()
  }

}