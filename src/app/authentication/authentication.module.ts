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
import { PasswordService } from '../services/Passwords/password.service';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';


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
    CustomAngularMaterialModule,
    SocialLoginModule
  ],
  providers: [
    AuthService,
    RegistrationService,
    RoleService,
    PasswordService,
    { provide:HTTP_INTERCEPTORS , useClass: LoaderInterceptor, multi: true},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '384590964304-pegv7gph8ckru3urlpuvqc1ltnjlr1gs.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('941298796756294')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class AuthenticationModule { }
