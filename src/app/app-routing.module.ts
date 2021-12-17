import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassmanageComponent } from './components/classmanage/classmanage.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashteacherComponent } from './components/dashteacher/dashteacher.component';
import { IndexComponent } from './components/index/index.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { TeachermanageComponent } from './components/teachermanage/teachermanage.component';
import { UsermanageComponent } from './components/usermanage/usermanage.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'inscription', component: InscriptionComponent},
  {path:'dashteacher', component: DashteacherComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'class', component: ClassmanageComponent},
  {path:'users', component: UsermanageComponent},
  {path:'teachers', component: TeachermanageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
