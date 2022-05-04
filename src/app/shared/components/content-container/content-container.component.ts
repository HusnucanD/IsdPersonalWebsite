import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentContainerComponent implements OnInit {
  @Input('Content') content: string;
  contentSafe: SafeHtml;
  constructor(private domSanitizer: DomSanitizer) { }
  ngOnInit() {
    this.contentSafe = this.domSanitizer.bypassSecurityTrustHtml(this.content);
  }
}

