import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Headers, RequestOptions} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, AuthService } from "angularx-social-login";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit { 

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
