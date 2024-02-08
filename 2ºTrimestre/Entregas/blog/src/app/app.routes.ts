import { Routes } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostUpdateComponent } from './post/post-update/post-update.component';

export const routes: Routes = [
    { path: 'posts', component: PostListComponent }, 
    { path: 'posts/:id', component: PostDetailComponent },
    { path: 'create', component: PostCreateComponent },
    { path: 'update/:id', component: PostUpdateComponent },
    { path: '', redirectTo: '/posts', pathMatch: 'full' }, // Redirigir a '/posts' por defecto
//   { path: '**', component: PageNotFoundComponent } // Manejo de rutas no encontradas
];