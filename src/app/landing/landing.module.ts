
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingMainComponent } from './components/landing-main/landing-main.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    LandingMainComponent,
    CarouselComponent,
    TabsComponent,
    TabComponent,
    ContactComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
  ],
  providers: [],
  bootstrap: [LandingMainComponent]
})

export class LandingModule { }
