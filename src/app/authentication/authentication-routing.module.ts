import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { 
    path: '',
    component:AuthenticationComponent,
    children:[
      {path: 'login', component: LoginComponent},
      { 
        path: 'register', 
        component: RegisterComponent
      },
      {
        path: 'reset',
        component: PasswordComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
