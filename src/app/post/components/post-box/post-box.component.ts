
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/shared/services/state.service';

declare const $: any;

@Component({
  selector: 'post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css']
})

export class PostBoxComponent {
  @Input("Id") id: number;
  @Input("Title") title: string;
  @Input("Content") content: string;
  @Input("ImgUrl") imgUrl: string;
  string: any;
  constructor(private router: Router, private route: ActivatedRoute, private state: State) {
    this.string = this.state.string.post_postBox;
    $(document).ready(function() {
      var divWidth = $('.div-img').width(); 
      $('.div-img').css('height', ((divWidth * 2) / 3) +'px');
    });  
  }
  postClick(id: number) {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }
}
