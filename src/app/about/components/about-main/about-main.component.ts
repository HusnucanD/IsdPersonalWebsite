import { Component } from '@angular/core';
import { About } from 'src/app/shared/models';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.css'],
})
export class AboutMainComponent {
  public about: About;
  constructor(private state: State) {
    this.about = this.state.about;
  }
}
