import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
