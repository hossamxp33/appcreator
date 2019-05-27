import { HeadersPageComponent } from './headers-page/headers-page.component';
import { OwlModule } from 'ngx-owl-carousel';
import { StoreComponent } from './store/store.component';
import { HeadersComponent } from './headers/headers.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';
import { SplashComponent } from './splash/splash.component';
import { SlidersComponent } from './sliders/sliders.component';
@NgModule({
  declarations: [
    StoreComponent,
    HeadersComponent,
    HeadersPageComponent,
    SlidersComponent,
    SplashComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule.forRoot(),
    ColorPickerModule,
    OwlModule

  ],
  exports: [SplashComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
