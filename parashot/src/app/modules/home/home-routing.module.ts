import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeadersPageComponent } from './headers-page/headers-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { SlidersComponent } from './sliders/sliders.component';
import { StoreComponent } from './store/store.component';
import { FooterComponent } from './marginals/footer/footer.component';
import { FooterPageComponent } from './footer-page/footer-page.component';

const routes: Routes = [
  {
    path: '', component: StoreComponent, children: [
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
      ,
      {
        path: 'footer-page',
        component: FooterPageComponent,
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
