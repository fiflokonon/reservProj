import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
data : any = {};
token: any;
authForm : FormGroup|any;
  constructor(private service: UserService, private route: Router) { }

  connexion()
  {
    if(this.authForm.dirty)
    {
      this.data.usernameOrEmail = this.authForm.get('userNemail').value;
      this.data.password = this.authForm.get('password').value;
      this.service.signin(this.data).toPromise()
      .then((response)=>{
        console.log(response);
        this.token = response;
        localStorage['head'] = JSON.stringify(this.token);
        this.route.navigate(['/dashteacher']);
      })
    }
    else 
    {
      alert('Mot de passe ou login incorrect');
    }
  }
  ngOnInit(): void {
    this.authForm = new FormGroup({
      userNemail : new FormControl(),
      password: new FormControl()
    })
  
  }

}
