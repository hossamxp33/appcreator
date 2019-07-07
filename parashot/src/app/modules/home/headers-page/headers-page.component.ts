import { Design } from './../../../helpers/design';
import { DesignService } from 'src/app/services/design.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-headers-page',
  templateUrl: './headers-page.component.html',
  styleUrls: ['./headers-page.component.scss']
})
export class HeadersPageComponent implements OnInit {
  // id: number = 1;
  // source = 'page';
  show: boolean = false;
  color;
  // logo;
  public imagePath;
  imgURL: any;
  mainDesign;
  // public message: string;
  constructor(private designService: DesignService) { }

  ngOnInit() {
    this.designService.getInitialDesign().subscribe(res => {
      this.mainDesign = new Design(res.data);
      this.color = this.mainDesign.header.data.background;
      this.designService.sliderId.next(this.mainDesign.header.data.slider_template);
      $(".cart img").attr("src", this.mainDesign.header.data.left_icon);
    })

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
  changeComplete(event) {
    // console.log(event.color)
    $("ion-header").css("background", event.color.hex);
    this.designService.editDesign({ type_id: this.mainDesign.header.type_id, fieldname: "background", value: event.color.hex }).subscribe(res => {
      $("ion-header").css("background", event.color.hex);
    })
  }
  logo(event) {
    // console.log('up')
    if (event.target.files.length === 0)
      return;

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = event.target.files;
    const file: File = event.target.files[0];
    reader.readAsDataURL(file);
    const formData = new FormData();
    formData.append('type_id', this.mainDesign.header.type_id);
    formData.append('fieldname', "logo");
    formData.append('value', file);

    this.designService.editDesign(formData).subscribe(res => {
      // console.log(res)
    })

    reader.onload = e => {
      let imgURL = reader.result;
      // console.log(imgURL)
      $(".ion-logo img").attr("src", imgURL);

    }

  }
  cart(event) {
    // console.log('up')
    if (event.target.files.length === 0)
      return;

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = event.target.files;
    const file: File = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = e => {
      let imgURL = reader.result;
      // console.log(imgURL)
      $(".cart img").attr("src", imgURL);

    }
    const formData = new FormData();
    formData.append('type_id', this.mainDesign.header.type_id);
    formData.append('fieldname', "left_icon");
    formData.append('value', file);
    this.designService.editDesign(formData).subscribe(res => {
      // console.log(res)
      // $(".cart img").attr("src", imgURL);
    })


  }
  search(event) {
    // console.log('up')
    if (event.target.files.length === 0)
      return;

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = e => {
      let imgURL = reader.result;
      // console.log(imgURL)
      $("ion-searchbar img").attr("src", imgURL);

    }

  }
}
