import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  headerColor = new BehaviorSubject<any>('#d02e2e');

  constructor(private http: HttpClient) { }

  getInitialDesign(): any {
    return this.http.get<any>(environment.serverUrl + 'types/getdata.json');

  }
}
