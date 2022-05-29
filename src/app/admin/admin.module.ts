import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminLoginFormComponent } from './components/admin-login-form/admin-login-form.component';

@NgModule({
  declarations: [
    AdminMainComponent, 
    AdminLoginComponent,
    AdminLoginFormComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AdminMainComponent],
})

export class AdminModule {}
