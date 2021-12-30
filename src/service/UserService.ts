import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../assets/config.json';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get(config.url + '/user');
  }
}
