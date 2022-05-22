import { Component, Input, OnInit } from '@angular/core';
import { ContentListBig, ContentText } from 'src/app/shared/models';

@Component({
  selector: 'about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.css'],
})
export class AboutContentComponent implements OnInit {
  @Input('Contents') contents: any[];
  texts: ContentText[] = [];
  lists: ContentListBig[] = [];
  ngOnInit() {
    for (let i = 0; i < this.contents.length; i++) {
      if (this.contents[i].type == 'content-text') {
        this.texts.push(this.contents[i]);
      } else if (this.contents[i].type == 'content-list-big') {
        this.lists.push(this.contents[i]);
      }
    }
  }
}
