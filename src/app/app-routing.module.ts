import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatWindowComponent } from 'src/chatWindow/chatWindow.component';
import { UserListComponent } from 'src/UserList/UserList.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'chatWindow', component: ChatWindowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
