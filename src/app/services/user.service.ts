import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
tok: any;
private readonly API_URL = `https://planningclassroom.herokuapp.com/api`;

  constructor(private http: HttpClient) { }

  signup(user: User)
  {
    console.log(user);
    const url = `${this.API_URL}/auth/signup`;
    return this.http.post(url, user);
  }

  signin(data: any)
  {
    const url = `${this.API_URL}/auth/signin`;
    return this.http.post(url, data);
  }
}
