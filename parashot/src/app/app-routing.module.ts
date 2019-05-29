import { SlidersComponent } from './modules/home/sliders/sliders.component';
import { HeadersPageComponent } from './modules/home/headers-page/headers-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './modules/home/categories/categories.component';
import { EditCategoriesComponent } from './modules/home/edit-categories/edit-categories.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: "./modules/auth/auth.module#AuthModule",
  },
  {
    path: '',
    loadChildren: "./modules/home/home.module#HomeModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
