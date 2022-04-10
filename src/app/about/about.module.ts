import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './components/about-main/about-main.component';

@NgModule({
  declarations: [
    AboutMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AboutRoutingModule
  ],
  providers: [],
  bootstrap: [AboutMainComponent]
})

export class AboutModule { 

}
