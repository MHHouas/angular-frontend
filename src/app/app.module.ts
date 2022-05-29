import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SinistreListComponent } from './sinistre/sinistre-list/sinistre-list.component';
import { CreateSinistreComponent } from './sinistre/create-sinistre/create-sinistre.component';
import { UpdateSinistreComponent } from './sinistre/update-sinistre/update-sinistre.component';
import { SinistreDetailsComponent } from './sinistre/sinistre-details/sinistre-details.component';
import { ContratListComponent } from './contrat/contrat-list/contrat-list.component';
import { CreateContratComponent } from './contrat/create-contrat/create-contrat.component';
import { UpdateContratComponent } from './contrat/update-contrat/update-contrat.component';
import { ContratDetailsComponent } from './contrat/contrat-details/contrat-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotosComponent } from './sinistre/sinistre-details/photos/photos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SinistreListComponent,
    CreateSinistreComponent,
    UpdateSinistreComponent,
    SinistreDetailsComponent,
    ContratListComponent,
    CreateContratComponent,
    UpdateContratComponent,
    ContratDetailsComponent,
    NavbarComponent,
    PhotosComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
