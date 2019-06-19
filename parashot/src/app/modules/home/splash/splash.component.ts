import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  splashImage;

  constructor() { }

  ngOnInit() {
  }

  // add splash screen

  addSplashImage(event) {

    if (event.target.files && event.target.files[0]){

      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {
        this.splashImage = event.target.result;
      }

    }

  }

}
