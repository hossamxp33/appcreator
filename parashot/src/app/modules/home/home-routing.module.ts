import { HeadersPageComponent } from './headers-page/headers-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { SlidersComponent } from './sliders/sliders.component';

const routes: Routes = [
  {
    path: '', component: SplashComponent
  },
{
      path: 'headers',
      component: HeadersPageComponent
  },
  {
    path: 'sliders',
    component: SlidersComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
