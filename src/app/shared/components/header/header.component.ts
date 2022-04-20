import { Component } from '@angular/core';
import {
  faMap,
  faPhoneAlt,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { State } from '../../services/state.service';
import { Service } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faMap = faMap;
  faPhoneAlt = faPhoneAlt;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faAngleDoubleDown = faAngleDoubleDown;
  string: any;
  link: any;
  services: Service[] = [];
  constructor(private state: State, private router: Router) {
    this.string = this.state.string.header;
    this.link = this.state.link.header;
    this.services = this.state.services;
  }
  isServiceOn() {
    return this.router.url.includes('services');
  }
}
