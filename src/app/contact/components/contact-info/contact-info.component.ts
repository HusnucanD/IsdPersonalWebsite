import { Component } from '@angular/core';
import { faMap, faPhoneAlt, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})

export class ContactInfoComponent {
  faMap = faMap;
  faPhoneAlt = faPhoneAlt;
  faEnvelopeOpenText = faEnvelopeOpenText;
}
