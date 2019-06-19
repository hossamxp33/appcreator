import { UploadSliderImagesService } from './upload-slider-images.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Splash } from '../models/splash.model';

@Injectable({
  providedIn: 'root'
})
export class SplashService {

  constructor(private http: HttpClient, private uploadImage: UploadSliderImagesService) { }
  addSplash(image: File) {
    this.uploadImage.uploadImage(image, 'Splashes/addsplash.json').subscribe(res => { }, err => { })
  }
  editSplash(image: File) {
    this.uploadImage.uploadImage(image, 'Splashes/editsplash/1.json').subscribe(res => { }, err => { })
  }
  getSplashs(): Observable<Splash> {
    return this.http.get<any>(environment.serverUrl + 'Splashes/getallsplashes.json');
  }
}
