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

  // private variables
  
  private apiURL = 'http://parashote.codesroots.com/api/users/add.json';

  constructor(private authService: AuthService, private http: HttpClient) { }
  
  addNewUser() { 
    
    // get user data
        
    let userData = {
        
        username: document.getElementById('ts_username').value,
        email: document.getElementById('ts_email').value,
        password: document.getElementById('ts_pwp').value        
    
    }   
    
    // set content type to application/json
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });    
        
    // send the data to the api
        
    this.http.post(this.apiURL, JSON.stringify(userData), options)
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
