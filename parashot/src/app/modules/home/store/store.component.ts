import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { SlideshowService } from 'src/app/services/slideshow.service';
@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"]
})
export class StoreComponent implements OnInit {
  constructor(private slidesService: SlideshowService) { }

  ngOnInit() {
    this.slidesService.getSlideShows();
    //  $(".menu-item").hover(function(){
    //   //  $(".routes").css("display","none");
    //   //   $(".col-12.mt-4").removeClass("col-md-2").addClass("col-md-8");
    //   }).mouseleave(function(){

    //   }).focus(function(){
    //    $(".routes").css("display","none");
    //   //  $(".page").removeAttr("display");
    //     $(".col-12.mt-4").removeClass("col-md-2").addClass("col-md-8");
    //   }).focusout(function(){
    //     $(".col-12.mt-4").addClass("col-md-2").removeClass("col-md-8");
    //           $(".routes").css("display","block");
    //           // $(".page").css("display","none");

    //   })
  }
}
