import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      
      transition('void => *', [
        
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
        
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate(68)
      ]),

      transition('* => void', [
       
        animate(50, style({
          transform: 'scale(1.05)'
        })),
       
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        animate('120ms ease-out', style({
          opacity: 0,
          transform: 'scale(0.68)', 
        })),
        
        animate('150ms ease-out', style({
          height: 0,
          paddingTop: 0,
          paddingBottom:0,
          paddingRight: 0,
          paddingLeft:0,
          'margin-bottom': '0',
        }))
      ])
    ]),

    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0,
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])

  ]
})
export class PostsListComponent implements OnInit {

    posts: Post[] = new Array<Post>();

  constructor(private postsService: PostsService) {
    
   }

  ngOnInit(): void {
   
    this.postsService.getPosts().subscribe((response: any) => {
      this.posts = response;
    })
    
  }

  deletePost(post: Post){
    let index = this.posts.indexOf(post);
    this.postsService.deletePost(post).subscribe((response: any) => {
      console.log(response);
      this.posts.splice(index,1);
    });
  }
  
}
