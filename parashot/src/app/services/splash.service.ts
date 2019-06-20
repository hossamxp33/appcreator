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

  constructor(private http: HttpClient) { }
  addSplash(image) {
    return this.http.post(environment.serverUrl + 'Splashes/addsplash.json', image);
  }
  editSplash(image, id) {
    return this.http.post(environment.serverUrl + 'Splashes/editsplash/' + id + '.json', image);
  }
  getSplashs(): Observable<Splash> {
    return this.http.get<any>(environment.serverUrl + 'Splashes/getallsplashes.json');
  }
}
