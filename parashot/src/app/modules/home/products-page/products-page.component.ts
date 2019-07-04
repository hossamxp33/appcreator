import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  color = '#000';
  imgSrc;
  items: number[] = [1];
  sizes: number[] = [1];
  show: boolean = false;
  // logo;
  public imagePath;
  imgURL: any;
  constructor() { }

  ngOnInit() {

    $(document).mouseup(function (e) {
      var container = $("color-sketch");
      var span = $('.color-span');

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && !span.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        this.show = false;
        // console.log(this.show)
      } else if (span.is(e.target)) {
        container.show();
      }
    });
  }

  // display image

  showImage(event) {

    if (event.target.files && event.target.files[0]) {

      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {
        this.imgSrc = event.target.result;
      }

    }

  }

  copyColor() {
    this.items.push(this.items.length + 1);
  }

  copySize() {
    this.sizes.push(this.sizes.length + 1);
  }
  changeComplete(event) {
    // console.log(event.color)
    // $("").css("background", event.color.hex);
  }
}
