import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { PostMainComponent } from './components/post-main/post-main.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostBoxComponent } from './components/post-box/post-box.component';

@NgModule({
  declarations: [
    PostMainComponent,
    PostsComponent,
    PostComponent,
    PostBoxComponent,
  ],
  imports: [CommonModule, SharedModule, PostRoutingModule],
  providers: [],
  bootstrap: [PostMainComponent],
})
export class PostModule {}
