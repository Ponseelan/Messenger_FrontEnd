import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatWindowComponent } from 'src/chatWindow/chatWindow.component';
import { MessageService } from 'src/service/MessageService';
import { UserService } from 'src/service/UserService';
import { UserListComponent } from 'src/UserList/UserList.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ChatWindowComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
