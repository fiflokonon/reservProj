import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly API_URL = `https://planningclassroom.herokuapp.com/api`;
  constructor(private http: HttpClient) { }

  reservClassroom(id:number, data: any)
  {
    const url = `${this.API_URL}/classroom/${id}/reservation`;
    return this.http.post(url, data);
  }
  getReservForUser()
  {
    const url = `${this.API_URL}/user/equipment/reservation`;
    return this.http.get(url);
  }
}

