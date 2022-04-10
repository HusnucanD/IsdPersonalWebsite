import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './components/about-main/about-main.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { AboutContentComponent } from './components/about-content/about-content.component';

@NgModule({
  declarations: [
    AboutMainComponent,
    AboutHeaderComponent,
    AboutContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AboutRoutingModule,
  ],
  providers: [],
  bootstrap: [AboutMainComponent],
})
export class AboutModule {}
