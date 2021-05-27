import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment.model';
import { Post } from '../shared/post.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  

  posts: Post[] = new Array<Post>();

  constructor(private webReqService: WebRequestService) { }



  addPost(post: Post){
    return this.webReqService.post('posts', post);
  }

  getPosts(){
    return this.webReqService.get('posts');
  }

  deletePost(post){
    return this.webReqService.delete(`posts/${post._id}`);
  }

  getPostById(id: string){
    return this.webReqService.getElementById(`posts/${id}`);
  }

  addComments(postId: string, name:string, body:string){
    let comment: Comment = new Comment();
    comment.name = name;
    comment.body = body;
    comment._postId = postId;
    return this.webReqService.post(`posts/${postId}/comments`, comment);
  }

  getComments(postId: string){
    return this.webReqService.get(`posts/${postId}/comments`);
  }



}
