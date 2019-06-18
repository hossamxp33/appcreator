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
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIxMCwiZXhwIjoxNTYxMjkxMjg0fQ.9LAiqkY8aKFBv85rhy4jwjSoDInlluAdqYV9psTTrA0';
    return token;
  }
  setToken(token) {

  }
}
