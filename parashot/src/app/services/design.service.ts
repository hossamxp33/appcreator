import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignService {


  constructor(private http: HttpClient) { }

  getInitialDesign(): any {
    return this.http.get<any>(environment.serverUrl + 'types/getdata.json');

  }
}
