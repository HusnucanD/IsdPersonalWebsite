
import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/shared/services/state.service';
import { Post } from '../../../shared/models/post.model';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  pagination: boolean;
  pages: number[] = [];
  selectedPage: number;
  data: {
    rows: {
      posts: Post[];
    }[]
  };
  constructor(private state: State) { 

  }
  ngOnInit() { 
    this.data = {
      rows: []
    }; 
    for(let i = 0; i < this.state.posts.length; i++) {
      if(i % 3 == 0) {
        let array = [];
        array.push(this.state.posts[i]);
        this.data.rows.push({
          posts: array
        });
      }
      else {
        this.data.rows[this.data.rows.length - 1].posts.push(this.state.posts[i]);
      }
    }
    this.pagination = this.data.rows.length > 2;
    if (this.pagination) {
      for (let i = 0; i < this.data.rows.length; i++) {
        if (i % 2 == 0) {
          this.pages.push(i / 2);
        }
      }
    }
    this.pages = this.pages.map(x => { return x + 1});
    this.selectedPage = 1;
  }
  pageClick(pageNumber: number) {
    this.selectedPage = pageNumber;
  }
}
