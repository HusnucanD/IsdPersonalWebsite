import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDataLoaderService } from './shared/services/main-data.loader.service';

export function mainDataLoader(mainDataLoaderService: MainDataLoaderService) {
  return () => mainDataLoaderService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: mainDataLoader,
      deps: [MainDataLoaderService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
