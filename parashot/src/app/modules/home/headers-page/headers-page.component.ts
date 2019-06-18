import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers-page',
  templateUrl: './headers-page.component.html',
  styleUrls: ['./headers-page.component.scss']
})
export class HeadersPageComponent implements OnInit {
  // id: number = 1;
  // source = 'page';
  color = '#d02e2e';
  constructor() { }

  ngOnInit() {

  }
  // getId($event) {
  // this.id = $event;
  // console.log(this.id)
  // }
  // handleChange($event: ColorEvent) {
  //   console.log($event.color);
  //   // color = {
  //   //   hex: '#333',
  //   //   rgb: {
  //   //     r: 51,
  //   //     g: 51,
  //   //     b: 51,
  //   //     a: 1,
  //   //   },
  //   //   hsl: {
  //   //     h: 0,
  //   //     s: 0,
  //   //     l: .20,
  //   //     a: 1,
  //   //   },
  //   // }
  // }
}
