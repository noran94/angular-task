import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SiteComponent } from './components/site/site.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '', component: SiteComponent,
    children: [
      {
        path: '', component: DashboardComponent,
      },
      {
        path: 'posts', component: PostsComponent,
      },
      {
        path: 'users', component: UsersComponent,
      },
      {
        path: 'profile', component: ProfileComponent,canActivate:[AuthGaurdService]
      },
      {
         path: 'post/:id', component: PostComponent 
      },
      { 
        path: 'user/:id', component: UserComponent 
      },
    ]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
