import { ColorPickerModule } from 'ngx-color-picker';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicsimulatorComponent } from './ionicsimulator/ionicsimulator.component';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [IonicsimulatorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule.forRoot(),
    ColorPickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
