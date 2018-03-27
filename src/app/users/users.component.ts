import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  resetUser = false;
  disableButton = false;
  userName = "";

  constructor() { }

  ngOnInit() {
  }

  resetUserName() {
    this.userName = "";
    this.disableButton = false;
  }

  onUpdateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;

    if(this.userName) {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }
  }

}
