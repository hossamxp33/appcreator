import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginData) {
    this.http.post<any>(environment.serverUrl + 'users/token.json', loginData).subscribe(res => {

    },
      err => {
        console.log(err);

      });

  }
  getToken() {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIxMywiZXhwIjoxNTYxOTc4Njk5fQ.bHgLGU5IyvMlmAqagMiX9ZPBe-dEzrD_D9_P8jvVDUI';
    return token;
  }
  setToken(token) {

  }
}
