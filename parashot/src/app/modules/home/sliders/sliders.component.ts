import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

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
