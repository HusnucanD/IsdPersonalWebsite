import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TabComponent implements OnInit {
  @Input('Content') content: string;
  @Input('Title') title: string;
  @Input('ImgUrl') imgUrl: string;
  _visible: boolean;
  animation: boolean;
  contentSafe: SafeHtml;
  constructor(private domSanitizer: DomSanitizer) {}
  ngOnInit() {
    this.contentSafe = this.domSanitizer.bypassSecurityTrustHtml(this.content);
  }
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
