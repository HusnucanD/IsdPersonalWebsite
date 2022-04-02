
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit{
  id: number;
  title: string;
  content: string;
  imgUrl: string;
  author: string;
  latestPosts: Post[] = [];
  constructor(private state: State, private router: Router, private activatedRoute: ActivatedRoute) {
    //
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.state.Posts.pipe(first()).subscribe(posts => {
        let post = posts.find(x => x.id == this.id);
        if (post != undefined) {
          this.title = post.title;
          this.content = post.content;
          this.imgUrl = post.imgUrl;
          this.author = post.author;
        }
        let otherPosts = posts.filter(x => x.id != this.id);
        for (let i = 0; i < otherPosts.length && i < 3; i++) {
          this.latestPosts[i] = otherPosts[i];
        }  
      });
    });   
  }
  latestPostClicked(id: number) {
    this.router.navigate(['/blog/', id]);
  }
}
