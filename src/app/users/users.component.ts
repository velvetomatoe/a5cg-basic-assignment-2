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
  }

}
