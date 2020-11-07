import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service'


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  // @Input() company: any ;
  company: any = {name: 'eb', email: 'emailCompany', phoneNumberCompany: 12345 , imgUrlCompany: "urlimg"}
  requests;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllDisableRequest().subscribe(data => {
      this.requests = data
    })

  }

}