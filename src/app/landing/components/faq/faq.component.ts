import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { State } from 'src/app/shared/services/state.service';
import { Faq } from 'src/app/shared/models';

declare const $: any;

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements AfterViewInit {
  faAngleDown = faAngleDown;
  string: any;
  questions: Faq[] = [];
  constructor(private state: State) {
    this.string = this.state.string.landing_faq;
    this.questions = this.state.faqs;
  }
  ngAfterViewInit() {
    for (let i = 0; i < this.questions.length; i++) {
      $('#question' + i).click(() => {
        $('#answer' + i).slideToggle();
        $('#question' + i).toggleClass('border-button-question');
      });
    }
  }
}
