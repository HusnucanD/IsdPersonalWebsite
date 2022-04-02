
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingMainComponent } from './components/landing-main/landing-main.component';

const routes: Routes = [ 
  {
    path: "",
    component: LandingMainComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
