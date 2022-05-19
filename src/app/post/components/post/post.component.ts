import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/shared/services/state.service';
import { Content } from 'src/app/shared/models';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  id: number;
  title: string;
  contents: Content[];
  imgUrl: string;
  author: string;
  constructor(
    private state: State,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      let post = this.state.posts.find((x) => x.id == this.id);
      if (post != undefined) {
        this.title = post.title;
        this.contents = post.contents;
        this.imgUrl = post.imgUrl;
        this.author = post.author;
      }
    });
  }
  latestPostClicked(id: number) {
    this.router.navigate(['/blog/', id]);
  }
}
