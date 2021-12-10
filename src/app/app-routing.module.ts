import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassmanageComponent } from './components/classmanage/classmanage.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'inscription', component: InscriptionComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'class', component: ClassmanageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
