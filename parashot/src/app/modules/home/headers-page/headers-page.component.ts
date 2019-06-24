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
  constructor(private designService: DesignService) { }

  ngOnInit() {
    this.designService.headerColor.subscribe(res => {
      this.color = res
    });
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
  changeComplete(event) {
    // console.log(event.color)
    this.designService.headerColor.next(event.color.hex);

  }


}
