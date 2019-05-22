import { HeadersPageComponent } from './headers-page/headers-page.component';
import { OwlModule } from 'ngx-owl-carousel';
import { StoreComponent } from './store/store.component';
import { HeadersComponent } from './headers/headers.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicsimulatorComponent } from './ionicsimulator/ionicsimulator.component';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    StoreComponent,
    IonicsimulatorComponent,
    HeadersComponent,
    HeadersPageComponent,
    SplashComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule.forRoot(),
    ColorPickerModule,
    OwlModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
