import { SplashComponent } from './splash/splash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: SplashComponent
  },
  {
    path: 'home',
    loadChildren: "./modules/home/home.module#HomeModule",
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
