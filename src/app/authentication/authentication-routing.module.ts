import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { RoleChoiceComponent } from './register/role-choice/role-choice.component';
import { FormComponent } from './register/form/form.component';
import { SuccessfullComponent } from './register/successfull/successfull.component';

import { PasswordComponent } from './password/password.component';
import { ResetComponent } from './password/reset/reset.component';
import { ForgotComponent } from './password/forgot/forgot.component';

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
        path: '',
        component: PasswordComponent,
        children: [
          {path: 'forgot', component:ForgotComponent},
          {path: 'reset', component:ResetComponent}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
