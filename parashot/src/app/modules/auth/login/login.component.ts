import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Headers, RequestOptions} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private apiURL = 'http://parashote.codesroots.com/api/users/token.json';

  constructor(private authService: AuthService, private http: HttpClient) { }
  
  // get user 
  
  getUser () {
  
    let userData = {
        
        username: document.getElementById('ts_username').value,
        password: document.getElementById('ts_pwp').value        
    
    }   
    
    
    // set content type to application/json
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });    
        
    // send the data to the api
        
    this.http.get(this.apiURL, JSON.stringify(userData), options)
        .subscribe(response => {
            alert(response.json());
        });
        
    return false;
  
  }

  ngOnInit() {
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
