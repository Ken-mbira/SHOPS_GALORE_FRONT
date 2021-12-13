import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleChoiceComponent } from './register/role-choice/role-choice.component';
import { SuccessfullComponent } from './register/successfull/successfull.component';
import { FormComponent } from './register/form/form.component';
import { PasswordComponent } from './password/password.component';
import { ForgotComponent } from './password/forgot/forgot.component';
import { ResetComponent } from './password/reset/reset.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    RoleChoiceComponent,
    SuccessfullComponent,
    FormComponent,
    PasswordComponent,
    ForgotComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
