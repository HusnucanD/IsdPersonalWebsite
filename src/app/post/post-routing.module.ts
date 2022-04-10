import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMainComponent } from './components/post-main/post-main.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostMainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PostsComponent,
      },
      {
        path: ':id',
        component: PostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
