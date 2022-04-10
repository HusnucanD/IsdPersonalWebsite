import { Component } from '@angular/core';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  imgUrl: string;
  string: any;
  constructor(private state: State) {
    this.string = this.state.string.landing_contact;
    this.imgUrl = '../../../../assets/img/contact-icon.svg';
  }
}
