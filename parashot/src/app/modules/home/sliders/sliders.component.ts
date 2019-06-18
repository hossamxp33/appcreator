import { SlideshowService } from './../../../services/slideshow.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  id: number = -1;
  source = 'page';
  imagesDisplay;
  delete: boolean = false;
  imgSrc;
  constructor(private slidesService: SlideshowService) { }

  ngOnInit() {
    this.slidesService.sliderImages.subscribe(res => {
      this.imagesDisplay = res;
      console.log(this.imagesDisplay);
    })

  }
  deleteImg(id) {
    this.delete = true;
    console.log(id)
    this.slidesService.deleteImage(id).subscribe(res => {
      console.log(res);
      $(`.deleted-${id}`).css('display', 'block');
      if (res) {
        this.slidesService.getSlideShows();
        this.slidesService.sliderImages.subscribe(res => {
          this.imagesDisplay = res;
        })
      }
    })

  }
  getId($event) {
    this.id = $event;
    console.log(this.id)
  }
  addImg(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgSrc = event.target.result;
    };
    reader.readAsDataURL(file);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file)
      const formData = new FormData();
      formData.append('photo', file);
      console.log(formData)
      this.slidesService.addSlideShow(formData).subscribe(res => {
        console.log(res)
        // if (res) {
        this.slidesService.getSlideShows();
        this.slidesService.sliderImages.subscribe(res => {
          this.imagesDisplay = res;
          console.log(this.imagesDisplay)
        })
        // }

      })
    }
  }


}
