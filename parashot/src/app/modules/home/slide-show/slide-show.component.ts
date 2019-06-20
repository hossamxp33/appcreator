import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  show;
  imgSrc;

  constructor() { }

  ngOnInit() {
  }

  // toggle showing or not showing slide show

  toggleShow() {
    this.show = !this.show;
  }

  // show selected slide show image to the user

  showImage(event){

    if (event.target.files && event.target.files[0]) {

      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {
        this.imgSrc = event.target.result;
      };

    }

  }

}
