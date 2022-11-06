import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent,pathMatch:"full"},
  {path:"admin",component:Home2Component,canActivate:[AuthService]},
  {path:"user",component:HomeComponent,canActivate:[AuthService]},
  { path: 'hem', loadChildren: () => import('./bhagi/bhagi.module').then(m => m.BhagiModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
