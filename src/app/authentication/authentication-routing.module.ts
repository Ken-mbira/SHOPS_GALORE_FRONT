import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleChoiceComponent } from './register/role-choice/role-choice.component';
import { FormComponent } from './register/form/form.component';
import { SuccessfullComponent } from './register/successfull/successfull.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  {path: 'login', component: LoginComponent},
  { 
    path: 'register', 
    component: RegisterComponent,
    children: [
      {path: '', component:RoleChoiceComponent},
      {path: 'form', component:FormComponent},
      {path: 'success', component:SuccessfullComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
