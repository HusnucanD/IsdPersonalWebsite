import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { State } from './shared/services/state.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  string: any;
  constructor(private state: State, private title: Title) {
    this.string = this.state.string.global;
    this.title.setTitle(this.string.title);
  }
}
