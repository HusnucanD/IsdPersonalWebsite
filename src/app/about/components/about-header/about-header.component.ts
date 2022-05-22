import { Component, Input } from '@angular/core';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.css'],
})
export class AboutHeaderComponent {
  @Input('Name') name: string;
  @Input('Title') title: string;
}
