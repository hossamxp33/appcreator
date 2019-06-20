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

  }
}
