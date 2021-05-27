import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {


  post: Post;
  postId: number;
  new: boolean;

  constructor(private postsService: PostsService,
  private router: Router,
  private route:ActivatedRoute) { }

ngOnInit(): void {

 this.post = new Post();

}

onSubmit(form: NgForm) {

   this.postsService.addPost(form.value).subscribe((response: any) => {
     console.log(response);
     this.postsService.getPosts();
   });

   this.router.navigateByUrl('/posts');

}

cancel(){
 this.router.navigateByUrl('/posts');
}




}
