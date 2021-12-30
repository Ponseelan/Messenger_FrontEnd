import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/UserService';
import { CookieUtils } from 'src/utils/cookie/cookie';

@Component({
  selector: 'app-UserList',
  templateUrl: './UserList.component.html',
})
export class UserListComponent implements OnInit {
  users: any = [];
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    });
    console.log(this.users);
  }
  openMessage(loginId: any) {
    console.log('You have clicked' + loginId);
    CookieUtils.setCookie('loggedInUser', loginId);
    this.router.navigate(['/chatWindow']);
  }
}
