import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../models/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private readonly URL_API = `http://planningclassroom.herokuapp.com/api`;
  constructor(private http: HttpClient) { }

  getAll():Observable<Classroom[]>
  {
    const url = `${this.URL_API}/classrooms`;
    const headers = {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
    return this.http.get<Classroom[]>(url, {
      headers
    });
  }

  addClassroom(data: Classroom)
  {
    const url = `${this.URL_API}/classroom`;
    const headers = {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
    return this.http.post(url, data, {
      headers
    });
  }

  updateClassroom(id: number, data: Classroom)
  {
    const url = `${this.URL_API}/classroom/${id}`;
    return this.http.put(url, data);
  }
  
  deleteClassroom(id: number)
  {
    const url = `${this.URL_API}/classroom/${id}`;
    return this.http.delete(url);
  }

  getOneClassroom(id: number):Observable<Classroom>
  {
    const url = `${this.URL_API}/classroom/${id}`;

    return this.http.get<Classroom>(url);
  }
}
