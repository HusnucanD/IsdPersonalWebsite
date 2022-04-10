import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMainComponent } from './components/contact-main/contact-main.component';

const routes: Routes = [
  {
    path: '',
    component: ContactMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
