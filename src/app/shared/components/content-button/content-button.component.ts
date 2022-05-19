import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'content-button',
  templateUrl: './content-button.component.html',
  styleUrls: ['./content-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentButtonComponent {
  @Input("Text") text: string;
  @Input("Link") link: string;
}

