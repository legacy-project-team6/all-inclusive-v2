import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  // @Input() company: any ;
  company: {name: 'eb', email: 'emailCompany', phoneNumberCompany: '12345'}
  constructor() { }

  ngOnInit(): void {
  }

}
