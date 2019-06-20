import { IonicsimulatorComponent } from './ionicsimulator/ionicsimulator.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMagicIframeModule } from '@sebgroup/ng-magic-iframe';
import { AuthModule } from './../auth/auth.module';
import { SocialLoginModule } from 'angularx-social-login';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { CategoriesComponent } from './categories/categories.component';
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
import { HeaderComponent } from './marginals/header/header.component';
import { FooterComponent } from './marginals/footer/footer.component';
import { SidebarComponent } from './marginals/sidebar/sidebar.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ProductsComponent } from './products/products.component';
import { BarRatingModule } from "ngx-bar-rating";
import { SlideShowComponent } from './slide-show/slide-show.component';

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
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule.forRoot(),
    ColorPickerModule,
    OwlModule,
    SocialLoginModule,
    AuthModule,
    ColorPickerModule,
    NgMagicIframeModule,
    MatSlideToggleModule,
    BarRatingModule

  ],
  exports: [SplashComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
