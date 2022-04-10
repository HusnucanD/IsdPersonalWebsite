import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [AdminMainComponent, ProfileComponent, CreatePostComponent],
  imports: [CommonModule, AdminRoutingModule],
  providers: [],
  bootstrap: [AdminMainComponent],
})
export class AdminModule {}
