import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentListComponent {
  @Input('Content') items: string[];
  constructor() {
    console.log(this.items);
  }
}
