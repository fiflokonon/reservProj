import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Classroom } from 'src/app/models/classroom';
import { User } from 'src/app/models/user';
import { ClassroomService } from 'src/app/services/classroom.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {
me: User|any;
class = new Classroom();
addForm: FormGroup|any;
  constructor(private service: UserService, private classService: ClassroomService) {
    this.getMe();
   }
  getMe()
  {
    this.service.getMe().toPromise()
    .then((response)=>{
      this.me = response;
    })
  }

  addClassroom()
  {
    if(this.addForm.dirty)
    {
      this.class.name = this.addForm.get('name').value;
      this.class.effectif = this.addForm.get('effectif').value;
      console.log(this.class);
      this.classService.addClassroom(this.class).toPromise()
      .then((response)=>{
        console.log(response);
      })
    }
    else
    {
      alert('Formulaire vide');
    }
  }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(),
      effectif: new FormControl()
    })
  }

}
