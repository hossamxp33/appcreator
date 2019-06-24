import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent implements OnInit {

  color = '#d02e2e';
  fontColor = '#942994';
  border;
  shadow;
  mainImage;
  orderImage;
  offerImage;
  notiImage;
  moreImage;
  show: boolean = false;
  constructor() { }

  ngOnInit() {
    $(document).mouseup(function (e) {
      var container = $("color-sketch");
      var span = $('.color-span');

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && !span.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        this.show = false;
        console.log(this.show)
      } else if (span.is(e.target)) {
        container.show();
      }
    });
  }

  // toggle border option

  toggleBorder() { this.border = !this.border; }

  // toggle shadow option

  toggleShadow() { this.shadow = !this.shadow; }

  // show image

  showImage(event, input: HTMLInputElement) {

    if (event.target.files && event.target.files[0]) {

      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {

        if (input.id == 'ts_main_image') { this.mainImage = event.target.result; }
        else if (input.id == 'ts_order_image') { this.orderImage = event.target.result; }
        else if (input.id == 'ts_offer_image') { this.offerImage = event.target.result; }
        else if (input.id == 'ts_noti_image') { this.notiImage = event.target.result; }
        else if (input.id == 'ts_more_image') { this.moreImage = event.target.result; }
      }

    }


  }

  changeComplete(event) {

  }

}
