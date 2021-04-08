import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {path:'Registration',component:RegistrationComponent},
  {path:'Login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
