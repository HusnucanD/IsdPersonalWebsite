
import { Component, OnInit } from '@angular/core';
import { State } from './shared/services/state.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: ['']
})

export class AppComponent implements OnInit {
  title = 'Personal Website';
  constructor(private state: State) {

  }
  ngOnInit() {
    this.state.setString();
    this.state.setLink();
    this.state.SetPosts();
  }
}
