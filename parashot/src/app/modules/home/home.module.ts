import { IonicsimulatorComponent } from './ionicsimulator/ionicsimulator.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColorSketchModule } from 'ngx-color/sketch';

import { AuthModule } from './../auth/auth.module';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeadersPageComponent } from './headers-page/headers-page.component';
import { OwlModule } from 'ngx-owl-carousel';
import { StoreComponent } from './store/store.component';
import { HeadersComponent } from './headers/headers.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module';
import { SplashComponent } from './splash/splash.component';
import { SlidersComponent } from './sliders/sliders.component';
import { HeaderComponent } from './marginals/header/header.component';
import { FooterComponent } from './marginals/footer/footer.component';
import { SidebarComponent } from './marginals/sidebar/sidebar.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ProductsComponent } from './products/products.component';
import { BarRatingModule } from "ngx-bar-rating";
import { SlideShowComponent } from './slide-show/slide-show.component';
import { FormsModule } from '@angular/forms';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [
    StoreComponent,
    HeadersComponent,
    HeadersPageComponent,
    SlidersComponent,
    SplashComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CategoriesComponent,
    IonicsimulatorComponent,
    EditCategoriesComponent,
    FooterPageComponent,
    ProductsComponent,
    SlideShowComponent,
    CategoriesListComponent,
    ProductsPageComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule.forRoot(),
    OwlModule,
    AuthModule,
    MatSlideToggleModule,
    BarRatingModule,
    FormsModule,
    ColorSketchModule


  ],
  providers: [],
  exports: [SplashComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
