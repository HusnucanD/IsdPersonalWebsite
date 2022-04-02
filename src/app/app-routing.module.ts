
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", 
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
    pathMatch: "full" 
  },
  {
    path: "blog",
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "contact",
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
