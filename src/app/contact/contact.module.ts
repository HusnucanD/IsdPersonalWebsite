import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactMapComponent } from './components/contact-map/contact-map.component';

@NgModule({
  declarations: [
    ContactMainComponent,
    ContactInfoComponent,
    ContactFormComponent,
    ContactMapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ],
  providers: [],
  bootstrap: [ContactMainComponent]
})

export class ContactModule { 

}
