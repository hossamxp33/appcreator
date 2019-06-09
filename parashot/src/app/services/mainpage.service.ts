import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {

  constructor(private http: HttpClient) { }
  getMainPage() {
    this.http.get<any>(environment.serverUrl + 'products/mainpage.json');
  }
}
