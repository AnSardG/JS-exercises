import { Routes } from '@angular/router';
import { ListComponent } from './post/list/list.component';
import { DetailComponent } from './post/detail/detail.component';
import { CreateComponent } from './post/create/create.component';
import { UpdateComponent } from './post/update/update.component';

export const routes: Routes = [
    { path: 'post', redirectTo: 'post/list', pathMatch: 'full' },
    { path: 'post/list', component: ListComponent },
    { path: 'post/:postId/detail', component: DetailComponent },
    { path: 'post/create', component: CreateComponent },
    { path: 'post/:postId/update', component: UpdateComponent}
];
