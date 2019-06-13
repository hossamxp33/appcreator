import { UploadSliderImagesService } from "./upload-slider-images.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SlideshowService {
  constructor(
    private http: HttpClient,
    private uploadImage: UploadSliderImagesService
  ) {}

  addSlideShow(image: File) {
    this.uploadImage
      .uploadImage(image, "Slideshows/addslideshow.json")
      .subscribe(res => {}, err => {});
  }
  editSlideShow(image: File) {
    this.uploadImage
      .uploadImage(image, "Slideshows/editslideshow/2.json")
      .subscribe(res => {}, err => {});
  }
  getSlideShows() {
    return this.http.get<any>(
      environment.serverUrl + "Slideshows/getallslideshows.json"
    );
  }
}
