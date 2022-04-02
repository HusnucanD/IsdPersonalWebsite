
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private router: Router, private route: ActivatedRoute) {
    $(document).ready(function() {
      var divWidth = $('.div-img').width(); 
      $('.div-img').css('height', ((divWidth * 2) / 3) +'px');
    });  
  }
  postClick(id: number) {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }
}
