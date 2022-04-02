
import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { State } from '../../services/state.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent{
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  string: any;
  link: any;
  description: string;
  constructor(private state: State) {
    this.string = this.state.string.footer;
    this.link = this.state.link.footer;
    this.description = this.string.description
      .replace("[[Year]]", new Date().getFullYear().toString())
      .replace("[[Title]]", this.string.title);  
  }
}
