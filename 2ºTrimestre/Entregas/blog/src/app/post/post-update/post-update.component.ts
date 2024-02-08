import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-update',
  standalone: true,  
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-update.component.html',
  styleUrl: './post-update.component.css'
})
export class PostUpdateComponent implements OnInit{
  postId!: number;
  postForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {      
      this.postId = +params.get('id')!;
      this.loadPostData();  
    });
  }

  loadPostData(): void {
    this.postService.find(this.postId)
      .subscribe(post => {
        this.postForm.patchValue(post); // Poblar el formulario con los datos del post
      });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const formData = this.postForm.value;
      this.postService.update(this.postId, formData)
        .subscribe(() => {
          // Redirigir a la vista del post editado
          this.router.navigate(['/posts', this.postId]);
        });
    }
  }
}
