import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  
  posts!: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getAll()
      .subscribe(posts => this.posts = posts);
  }

  deletePost(id: number): void {
    this.postService.delete(id)
      .subscribe(() => {
        // Actualizar la lista de posts después de borrar uno
        this.posts = this.posts.filter(post => post.id !== id);
      });
  }
  
}
