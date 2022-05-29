import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinistreListComponent } from './sinistre/sinistre-list/sinistre-list.component';
import { CreateSinistreComponent } from './sinistre/create-sinistre/create-sinistre.component';
import { UpdateSinistreComponent } from './sinistre/update-sinistre/update-sinistre.component';
import { SinistreDetailsComponent } from './sinistre/sinistre-details/sinistre-details.component';
import { ContratListComponent } from './contrat/contrat-list/contrat-list.component';
import { CreateContratComponent } from './contrat/create-contrat/create-contrat.component';
import { UpdateContratComponent } from './contrat/update-contrat/update-contrat.component';
import { ContratDetailsComponent } from './contrat/contrat-details/contrat-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from 'src/services/auth-guard.service';

const routes: Routes = [
  {path: 'sinistres', component: SinistreListComponent, canActivate:[AuthGuardService]},
  {path: 'create-sinistre', component: CreateSinistreComponent, canActivate:[AuthGuardService]},
  {path: 'update-sinistre/:id', component: UpdateSinistreComponent, canActivate:[AuthGuardService]},
  {path: 'sinistre-details/:id', component: SinistreDetailsComponent, canActivate:[AuthGuardService]},
  {path: '', redirectTo: 'sinistres', pathMatch: 'full'},
  {path: 'contrats', component: ContratListComponent, canActivate:[AuthGuardService]},
  {path: 'create-contrat', component: CreateContratComponent, canActivate:[AuthGuardService]},
  {path: 'update-contrat/:id', component: UpdateContratComponent, canActivate:[AuthGuardService]},
  {path: 'contrat-details/:id', component: ContratDetailsComponent, canActivate:[AuthGuardService]},
  {path:"login",component:LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
