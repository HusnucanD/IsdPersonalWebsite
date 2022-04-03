import { Component } from '@angular/core';
import { faMap, faPhoneAlt, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})

export class ContactInfoComponent {
  faMap = faMap;
  faPhoneAlt = faPhoneAlt;
  faEnvelopeOpenText = faEnvelopeOpenText;
  string: any;
  constructor(private state: State) {
    this.string = this.state.string.contact_contactInfo;
  }
}
