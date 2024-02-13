import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';

export const routes: Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'countries', loadChildren: () => import('./countries/countries-routing.module').then(m => m.CountriesRoutingModule) }, // Lazy loading
    { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Ruta por defecto   
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SidebarComponent],
  exports: [RouterModule]
})
export class RoutesModule { }
