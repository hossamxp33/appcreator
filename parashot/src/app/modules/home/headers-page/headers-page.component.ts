import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers-page',
  templateUrl: './headers-page.component.html',
  styleUrls: ['./headers-page.component.scss']
})
export class HeadersPageComponent implements OnInit {
  id: number = 1;
  source = 'page';
  constructor() { }

  ngOnInit() {

  }
  getId($event) {
    this.id = $event;
    console.log(this.id)
}
}
