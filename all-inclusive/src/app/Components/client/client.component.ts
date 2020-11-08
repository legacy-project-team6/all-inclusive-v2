import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  // user comming as a props from signin and to be sent as a props to messages component
  // @Input() user: any ;
  user: any;
  eventsArray: any = []
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser()
  }

}