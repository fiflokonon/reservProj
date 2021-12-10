import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsermanageService {

private readonly URL_API = `https://planningclassroom.herokuapp.com/api`;

constructor(private http:HttpClient) { }

inActiveTeacherList(): Observable<User[]>
{
  const url = `/invalid/enseignants`;
  return this.http.get<User[]>(url);
}

activeTeacherAccount(email: string)
{
  const url = `/upgrade/${email}`;
  return this.http.put(url,{
  });
}

giveRespRoleToTeacher(email: string)
{
  const url = `/user/${email}`;
  return this.http.put(url,{});
}

deleteUser(email: string)
{
  const url = `/user/${email}`;
  return this.http.delete(url);
}

getme():Observable<User>
{
  const url = `/user/me`;
  return this.http.get<User>(url);
}

}
