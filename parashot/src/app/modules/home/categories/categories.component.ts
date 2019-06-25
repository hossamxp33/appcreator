import { MainpageService } from './../../../services/mainpage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  imgSrc;
  categories;

  constructor(private mainpageService: MainpageService) { }

  ngOnInit() {
    this.mainpageService.getMainPage().subscribe(res => {
      this.categories = res.category;
      console.log(this.categories)
    })
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
