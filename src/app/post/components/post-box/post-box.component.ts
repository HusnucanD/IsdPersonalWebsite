import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from 'src/app/shared/models';
import { State } from 'src/app/shared/services/state.service';

declare const $: any;

@Component({
  selector: 'post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostBoxComponent {
  @Input('Id') id: number;
  @Input('Title') title: string;
  @Input('Contents') contents: Content[];
  @Input('ImgUrl') imgUrl: string;
  string: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private state: State
  ) {
    this.string = this.state.string.post_postBox;
  }
  postClick(id: number) {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }
}
