import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { CoreModule } from './core/core.module';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { ApiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { AppMaterialModule } from './app-material/app-material.module';

import { IonicModule } from '@ionic/angular';
import { OwlModule } from 'ngx-owl-carousel';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPopupComponent } from './error-popup/error-popup.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("967400515765-kel935i9i5umrlavfbn27cgkq4rtrm5c.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("664538330623923-App-Id")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorPopupComponent,

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
    AuthModule,
    BrowserAnimationsModule,
    CoreModule,
    SocialLoginModule,
    AppMaterialModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiPrefixInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true
  },
  {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents:[ErrorPopupComponent]
})
export class AppModule { }
