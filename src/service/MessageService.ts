import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../assets/config.json';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {}
  getUsers(userId: any): Observable<any> {
    return this.http.get(config.url + '/message?userId=' + userId);
  }
}
