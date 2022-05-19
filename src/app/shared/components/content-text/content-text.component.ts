import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'content-text',
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentTextComponent {
  @Input("Content") content: string;
}

