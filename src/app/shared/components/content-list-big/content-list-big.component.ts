import { Component, Input, ViewEncapsulation } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ContentListBig } from '../../../shared/models';

@Component({
  selector: 'content-list-big',
  templateUrl: './content-list-big.component.html',
  styleUrls: ['./content-list-big.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentListBigComponent {
  faAngleRight = faAngleRight;
  @Input('Content') listBig: ContentListBig;
}
