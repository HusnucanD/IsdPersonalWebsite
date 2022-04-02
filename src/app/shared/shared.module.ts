
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule
  ]
})

export class SharedModule { }
