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
  constructor(private slidesService: SlideshowService) { }

  ngOnInit() {
    this.slidesService.getSlideShows().subscribe(res => {
      this.imagesDisplay = res;
      console.log(this.imagesDisplay);
    })

  }
  deleteImg(id) {
    this.delete = true;
    // console.log(id)
    this.slidesService.deleteImage(id).subscribe(res => {
      console.log(res);
      $(`.deleted-${id}`).css('display', 'none');
    })

  }
  getId($event) {
    this.id = $event;
    console.log(this.id)
  }
  processFile(event) {
    // const file: File = imagesInput.files[0];
    // const reader = new FileReader();
    // reader.addEventListener('load', (event: any) => {
    //   // this.uploadedFile = new ImageSnippet(event.target.result, file);
    //   // this.imagesDisplay.push({ "name": "../../../../assets/images/" + this.uploadedFile.file.name });
    //   console.log(this.imagesDisplay)
    // });
    // reader.readAsDataURL(file);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // this.uploadForm.get('profile').setValue(file);
      console.log(file)
      const formData = new FormData();
      formData.append('photo', file);
      console.log(formData)
      this.slidesService.addSlideShow(formData).subscribe(res => {
        console.log(res)

      })
    }
  }
  addImg() {

  }

}
