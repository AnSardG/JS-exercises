import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  postForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const formData = this.postForm.value;
      this.postService.create(formData)
        .subscribe(() => {
          // Redirigir a la lista de posts después de crear uno nuevo
          this.router.navigate(['/posts']);
        });
    }
  }
}
