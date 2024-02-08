import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit{
  post: Post | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    let postId = Number(this.route!.snapshot.paramMap.get('id'));
    if(postId == null) {
      postId = 0;
    }
    this.postService.find(postId).subscribe((post: Post) => {
      this.post = post;
    });
  }
}
