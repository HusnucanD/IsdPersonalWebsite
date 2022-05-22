import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Content } from '../../models';

@Component({
  selector: 'content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentContainerComponent {
  @Input('Content') contents: any[];
}
