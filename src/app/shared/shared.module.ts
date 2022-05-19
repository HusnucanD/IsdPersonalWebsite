import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentButtonComponent } from './components/content-button/content-button.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ContentTextComponent } from './components/content-text/content-text.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ContentButtonComponent,
    ContentContainerComponent, 
    ContentListComponent, 
    ContentTextComponent, 
    FooterComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, 
    RouterModule
  ],
  providers: [],
  exports: [
    ContentButtonComponent,
    ContentContainerComponent, 
    ContentListComponent, 
    ContentTextComponent, 
    FooterComponent, 
    HeaderComponent, 
    FontAwesomeModule
  ]
})
export class SharedModule {}
