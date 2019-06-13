import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UploadSliderImagesService {

  constructor(private http: HttpClient) { }

  uploadImage(image: File, url): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    console.log(image);
    return this.http.post(environment.serverUrl + url, formData);
  }
}
