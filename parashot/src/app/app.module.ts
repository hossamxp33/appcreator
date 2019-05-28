import { ColorPickerModule } from 'ngx-color-picker';
import { HeadersPageComponent } from './modules/home/headers-page/headers-page.component';
import { SlidersComponent } from './modules/home/sliders/sliders.component';
import { HeadersComponent } from './modules/home/headers/headers.component';
import { SidebarComponent } from './shared/marginals/sidebar/sidebar.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { HeaderComponent } from './shared/marginals/header/header.component';
import { FooterComponent } from './shared/marginals/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { OwlModule } from 'ngx-owl-carousel';
import { SocialLoginModule, AuthServiceConfig, AuthService } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { AuthModule } from './modules/auth/auth.module';
import { IonicsimulatorComponent } from './shared/components/ionicsimulator/ionicsimulator.component';
import { NgMagicIframeModule } from '@sebgroup/ng-magic-iframe';
import { CategoriesComponent } from './categories/categories.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("549753125776-tol8on9q0o1nrtkr1v1q44ifsl9gre7b.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2065583860235146")
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    IonicsimulatorComponent,
    ColorPickerComponent,
    HeadersComponent,
    SlidersComponent,
    HeadersPageComponent,
    CategoriesComponent,
    EditCategoriesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    IonicModule.forRoot(),
    OwlModule,
    SocialLoginModule,
    AuthModule,
    ColorPickerModule,
    NgMagicIframeModule,
    BrowserAnimationsModule,
    MatSlideToggleModule

  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
