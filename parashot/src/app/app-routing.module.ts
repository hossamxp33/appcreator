import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: "./home/home.module#HomeModule",
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
