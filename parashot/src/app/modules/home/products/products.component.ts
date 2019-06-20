import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  color = '#000';
  imgSrc;
  items: number[] = [1];
  sizes: number[] = [1];

  constructor() { }

  ngOnInit() {
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
  
  copySize(){
    this.sizes.push(this.sizes.length + 1);
  }

}
