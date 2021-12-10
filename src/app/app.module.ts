import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassmanageComponent } from './components/classmanage/classmanage.component';
import { UsermanageComponent } from './components/usermanage/usermanage.component';
import { TeachermanageComponent } from './components/teachermanage/teachermanage.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ConnexionComponent,
    InscriptionComponent,
    DashboardComponent,
    ClassmanageComponent,
    UsermanageComponent,
    TeachermanageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
