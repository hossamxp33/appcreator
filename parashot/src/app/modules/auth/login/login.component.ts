import { AuthenticationService } from './../../../core/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private user: SocialUser;
  private loggedIn: boolean;
  loading = false;
  submitted = false;
  constructor(private socialAuthService: AuthService,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) {
    // redirect to home if already logged in
    this.authService.currentUser.subscribe(res => {
      if (res) {
        this.router.navigate(['/']);

      }
    })

  }

  ngOnInit() {
    console.log($('.form-group').html())

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(8)]]

    });
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    // if (this.loginForm.invalid) {
    //   return;
    // }

    this.submitted = true;
    if (this.loginForm.valid) {
      this.loading = true;
      console.log(this.loginForm.value)

      this.authService.login(this.loginForm.value);
    }
  }
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
}
