import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentButtonComponent } from './components/content-button/content-button.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ContentListBigComponent } from './components/content-list-big/content-list-big.component';
import { ContentTextComponent } from './components/content-text/content-text.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ContentButtonComponent,
    ContentContainerComponent,
    ContentListComponent,
    ContentListBigComponent,
    ContentTextComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  providers: [],
  exports: [
    ContentButtonComponent,
    ContentContainerComponent,
    ContentListComponent,
    ContentListBigComponent,
    ContentTextComponent,
    FooterComponent,
    HeaderComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
