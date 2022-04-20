import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceMainComponent } from './components/service-main/service-main.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceMainComponent,
    children: [
      {
        path: ':link',
        component: ServiceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
