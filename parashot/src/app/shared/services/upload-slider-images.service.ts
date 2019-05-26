import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadSliderImagesService {

  constructor(private http: HttpClient) { }

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    console.log(image);
    return this.http.post('', formData);
  }
}
