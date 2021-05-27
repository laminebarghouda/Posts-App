import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { LoginPageComponent } from './pages/auth-pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/auth-pages/signup-page/signup-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MainLayoutAuthenticationComponent } from './pages/main-layout-authentication/main-layout-authentication.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PostCardComponent,
    PostDetailsComponent,
    PostsListComponent,
    AddPostComponent,
    LoginPageComponent,
    SignupPageComponent,
    UserDetailsComponent,
    MainLayoutAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
