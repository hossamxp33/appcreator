import { SlideshowService } from './../../../services/slideshow.service';
import { Component, OnInit } from '@angular/core';

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
  constructor( private slidesService : SlideshowService) { }

  ngOnInit() {
    this.slidesService.getSlideShows().subscribe(res => {
  this.imagesDisplay = res;
})

  }
  deleteImg(id) {
    this.delete = true;

  }
  getId($event) {
    this.id = $event;
    console.log(this.id)
  }
  processFile(imagesInput) {
    const file: File = imagesInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      // this.uploadedFile = new ImageSnippet(event.target.result, file);
      // this.imagesDisplay.push({ "name": "../../../../assets/images/" + this.uploadedFile.file.name });
      console.log(this.imagesDisplay)
    });
    reader.readAsDataURL(file);
  }

}
