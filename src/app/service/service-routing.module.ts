
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceMainComponent } from './components/service-main/service-main.component';

const routes: Routes = [ 
  {
    path: "",
    component: ServiceMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServiceRoutingModule { }
