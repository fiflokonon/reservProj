import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private service: UserService) { }
  inscripForm: FormGroup|any;
  user = new User();

  inscript()
  {
    if(this.inscripForm.dirty)
    {
      if(this.inscripForm.get('password').value == this.inscripForm.get('cpassword').value)
      {
        this.user.firstName = this.inscripForm.get('firstName').value;
        this.user.lastName = this.inscripForm.get('lastName').value;
        this.user.username = this.inscripForm.get('userName').value;
        this.user.email = this.inscripForm.get('email').value;
        this.user.noMatricule = this.inscripForm.get('matricule').value;
        this.user.number = this.inscripForm.get('numero').value;
        this.user.sexe = this.inscripForm.get('sexe').value;
        this.user.userType = this.inscripForm.get('type').value;
        this.user.password = this.inscripForm.get('password').value;
        this.service.signup(this.user).toPromise()
        .then(()=>{
          console.log('USER CREATED');
        });
      }
      else
      {
        alert('Mots de passe non conformes');
      }
    }
    else
    {
      alert('Formulaire non rempli');
    }
  }

  ngOnInit(): void {
    this.inscripForm = new FormGroup({
      lastName: new FormControl(),
      firstName: new FormControl(),
      userName: new FormControl(),
      email: new FormControl(),
      matricule: new FormControl(),
      numero: new FormControl(),
      sexe: new FormControl(),
      type: new FormControl(),
      password: new FormControl(),
      cpassword: new FormControl(),
    })

  }

}
