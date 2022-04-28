import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css'],
})
export class LatestPostsComponent implements OnInit {
  latestPosts: Post[] = [];
  string: any;
  constructor(
    private state: State,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.string = this.state.string.post_latestPosts;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] != undefined) {
        let otherPosts = this.state.posts.filter((x) => x.id != params['id']);
        for (let i = 0; i < otherPosts.length && i < 4; i++) {
          this.latestPosts[i] = otherPosts[i];
        }
      }
    });
  }
  latestPostClicked(id: number) {
    this.router.navigate(['/blog/', id]);
  }
}
