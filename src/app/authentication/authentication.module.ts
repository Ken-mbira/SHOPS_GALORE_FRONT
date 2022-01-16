import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module';

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

import { LoaderInterceptor } from '../interceptors/loader/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../services/authentication/auth.service';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { RoleService } from '../services/roles/role.service';


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
    AuthenticationRoutingModule,
    CustomAngularMaterialModule
  ],
  providers: [
    AuthService,
    RegistrationService,
    RoleService,
    { provide:HTTP_INTERCEPTORS , useClass: LoaderInterceptor, multi: true}
  ]
})
export class AuthenticationModule { }
