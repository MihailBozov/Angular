import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ LoginComponent,  ProfileComponent, RegisterComponent ],
  imports: [ 
    CommonModule, 
    UserRoutingModule, 
    FormsModule, 
    SharedModule, 
    ReactiveFormsModule 
  ]
})
export class UserModule { }
