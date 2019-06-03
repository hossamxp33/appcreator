import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from "../../../environments/environment.ts"


@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http: HttpClient) { }

getMainDesign(){
  this.http.get('http://parashote.codesroots.com/api/types/getdata.json');
}
}
