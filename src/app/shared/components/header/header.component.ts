
import { Component } from '@angular/core';
import { faMap, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { State } from '../../services/state.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  faMap = faMap;
  faPhoneAlt = faPhoneAlt;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  string: any;
  link: any;
  constructor(private state: State) {
    this.string = this.state.string.header;
    this.link = this.state.link.header;
  }
}
