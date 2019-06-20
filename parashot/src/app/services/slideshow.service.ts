import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { UploadSliderImagesService } from "./upload-slider-images.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { getJSDocThisTag } from 'typescript';

@Injectable({
  providedIn: "root"
})
export class SlideshowService {

  sliderImages = new BehaviorSubject(null);
  constructor(
    private http: HttpClient,
    private uploadImage: UploadSliderImagesService
  ) { }

  addSlideShow(image) {

    return this.http.post(environment.serverUrl + 'Slideshows/addslideshow.json', image)
  }
  editSlideShow(image: File) {
    return this.uploadImage
      .uploadImage(image, "Slideshows/editslideshow/2.json")
      .subscribe(res => { }, err => { });
  }
  deleteImage(id) {
    return this.http.delete(environment.serverUrl + 'Slideshows/delete/' + id + '.json')
  }
  getSlideShows(): any {
    return this.http.get<any>(
      environment.serverUrl + "Slideshows/getallslideshows.json"
    );
  }
}
