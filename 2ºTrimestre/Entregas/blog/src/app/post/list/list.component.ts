import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  posts: Post[] = [];

  constructor(public postService: PostService) { }
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;   
    })
  }

  deletePost(id: number) {
    this.postService.delete(id).subscribe(response => {
      this.posts = this.posts.filter(item => item.id !== id);
    })
  }
}
