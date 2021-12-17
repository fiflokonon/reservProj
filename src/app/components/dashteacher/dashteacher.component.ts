import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Classroom } from 'src/app/models/classroom';
import { User } from 'src/app/models/user';
import { ClassroomService } from 'src/app/services/classroom.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashteacher',
  templateUrl: './dashteacher.component.html',
  styleUrls: ['./dashteacher.component.css']
})
export class DashteacherComponent implements OnInit {

  constructor(private service: UserService, private serv: ClassroomService, private rvService: ReservationService) { 
    this.getMe();
  }
me: User|any;
resForm: FormGroup|any;
salles: Classroom[] = [];
getMe()
{
  this.service.getMe().toPromise()
  .then((response)=>{
    this.me = response;
    this.getAllClassrooms();
  })
}

getAllClassrooms()
{
  this.serv.getAll().toPromise()
  .then((response)=>{
    console.log(response);
    this.salles = response;
  })
}

doClassroomReservation(id: number)
{
  
}
  ngOnInit(): void {
    this.resForm = new FormGroup({
      name: new FormControl(),
      timestart : new FormControl(),
      timeend: new FormControl(),
      date: new FormControl()
    })
  }

}
