import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [AdminMainComponent, ProfileComponent, CreatePostComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
  providers: [],
  bootstrap: [AdminMainComponent],
})
export class AdminModule {}
