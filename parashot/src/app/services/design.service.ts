import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DesignModified } from '../models/designModified.model';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  sliderId = new BehaviorSubject<number>(3);
  categoryId = new BehaviorSubject<number>(1);
  productsId = new BehaviorSubject<number>(1);

  constructor(private http: HttpClient) { }

  getInitialDesign(): any {
    return this.http.get<any>(environment.serverUrl + 'types/getdata.json');

  }
  editDesign(data){
    console.log(data)
    return this.http.post<DesignModified>(environment.serverUrl + 'Typeattrs/editdata.json',data);
  }
}
