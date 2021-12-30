import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/UserService';
import { CookieUtils } from 'src/utils/cookie/cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Messenger';
  users: any = [];
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    });
    console.log(this.users);
  }


}
