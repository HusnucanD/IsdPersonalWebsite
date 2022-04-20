import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceMainComponent } from './components/service-main/service-main.component';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
  declarations: [ServiceMainComponent, ServiceComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ServiceRoutingModule,
  ],
  providers: [],
  bootstrap: [ServiceMainComponent],
})
export class ServiceModule {}
