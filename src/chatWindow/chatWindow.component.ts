import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/service/MessageService';
import { UserService } from 'src/service/UserService';
import { CookieUtils } from 'src/utils/cookie/cookie';

@Component({
  selector: 'app-chatWindow',
  templateUrl: './chatWindow.component.html',
})
export class ChatWindowComponent implements OnInit {
  messages: any[] = [];
  constructor(private messageService: MessageService) {}
  ngOnInit() {
    const userId = CookieUtils.getCookie('loggedInUserId');
    this.messageService.getUsers(userId).subscribe((message) => {
      this.messages = message;
    });
    console.log(this.messages);
  }
}
