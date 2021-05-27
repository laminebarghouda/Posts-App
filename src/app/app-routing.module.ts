import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { LoginPageComponent } from './pages/auth-pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/auth-pages/signup-page/signup-page.component';
import { MainLayoutAuthenticationComponent } from './pages/main-layout-authentication/main-layout-authentication.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';

const routes: Routes = [
  {path: '', redirectTo:'auth/login', pathMatch: 'full'},

  {path:'auth', component:MainLayoutAuthenticationComponent,children:[
    {path:'login', component: LoginPageComponent},
    {path:'signup', component: SignupPageComponent}
  ]},

  {path: 'posts', component: MainLayoutComponent, children:[
    {path:'', component: PostsListComponent},
    {path:'new', component: AddPostComponent},
    {path:':id', component: PostDetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
