import { Component, Input } from '@angular/core';
import { Content } from 'src/app/shared/models';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  @Input('Content') contents: Content[];
  @Input('Title') title: string;
  @Input('ImgUrl') imgUrl: string;
  _visible: boolean;
  animation: boolean;
  @Input('Visible') set visible(_visible: boolean) {
    this._visible = _visible;
    setTimeout(() => {
      this.animation = this._visible;
    }, 100);
  }
  get visible() {
    return this._visible;
  }
}
