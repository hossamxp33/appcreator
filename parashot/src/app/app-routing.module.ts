import { SlidersComponent } from './modules/home/sliders/sliders.component';
import { HeadersPageComponent } from './modules/home/headers-page/headers-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: "./modules/auth/auth.module#AuthModule",
  },
  {
    path: 'headers',
    component: HeadersPageComponent,
  },
  {
    path: 'sliders',
    component: SlidersComponent,
  }
  ,
  {
    path: 'categories',
    component: CategoriesComponent,
  }
  ,
  {
    path: 'edit-categories',
    component: EditCategoriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
