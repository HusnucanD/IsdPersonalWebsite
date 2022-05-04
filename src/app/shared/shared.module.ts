import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ContentContainerComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  providers: [],
  exports: [ContentContainerComponent, FooterComponent, HeaderComponent, FontAwesomeModule],
})
export class SharedModule {}
