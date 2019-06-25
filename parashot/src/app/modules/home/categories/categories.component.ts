import { MainpageService } from './../../../services/mainpage.service';
import { Component, OnInit, Input } from '@angular/core';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  imgSrc;
  categories;
  id;

  source: string = 'page';
  constructor(private mainpageService: MainpageService, private design: DesignService) { }

  ngOnInit() {


  }

  // show category image to user when choose an image

  showImage(event) {

    if (event.target.files && event.target.files[0]) {

      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {

        this.imgSrc = event.target.result;

      }

    }

  }

  // remove image that user uploaded

  resetImg() {

    this.imgSrc = null;

  }

}
