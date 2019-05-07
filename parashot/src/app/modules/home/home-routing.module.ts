import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicsimulatorComponent } from './ionicsimulator/ionicsimulator.component';

const routes: Routes = [{
  path: '',
  component: IonicsimulatorComponent,
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
