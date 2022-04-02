
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DynamicHeightDirective } from './directives/dynamic-height.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DynamicHeightDirective
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
    FontAwesomeModule,
    DynamicHeightDirective
  ]
})

export class SharedModule { }
