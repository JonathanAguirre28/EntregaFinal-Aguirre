import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatCardModule,
  ]
})
export class AuthModule { }
