import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/shared/post.model';
import { Comment } from 'src/app/shared/comment.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {


  post: Post;
  postId: string;
  comment: Comment = new Comment();
  comments: Comment[] = new Array<Comment>();

  constructor(private postService: PostsService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.post = new Post();

    this.route.params.subscribe((params: Params) => {
      if (params.id != 'new') {

         this.postService.getPostById(params.id).subscribe(
           (response: any) =>{
             this.post = response[0];
             this.postId = params.id;

             this.postService.getComments(this.postId).subscribe((res: any) => {
               this.comments = res;
             })
             

           },
           (error) => {this.router.navigateByUrl("/posts");}
         );

      }
      
    })

  }

  onSubmit(form:NgForm){
    this.postService.addComments(this.postId, form.value.name, form.value.body).subscribe((response: any) => {
      this.comments.push(response);
    });
  }



}
