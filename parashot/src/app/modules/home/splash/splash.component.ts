import { Component, OnInit } from '@angular/core';
import { SplashService } from 'src/app/services/splash.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  splashImage;

  constructor(private splashService: SplashService) { }

  ngOnInit() {
  }

  // add splash screen

  addSplashImage(event) {

    if (event.target.files && event.target.files[0]) {

      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {
        this.splashImage = event.target.result;

      }
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        console.log(file)
        const formData = new FormData();
        formData.append('photo', file);
        console.log(formData)
        this.splashService.addSplash(formData).subscribe(res => {
          console.log(res)
          if (res) {
            this.splashService.getSplashs().subscribe(res => {

              console.log(res.data)
            })
          }

        })
      }

    }

  }

}
