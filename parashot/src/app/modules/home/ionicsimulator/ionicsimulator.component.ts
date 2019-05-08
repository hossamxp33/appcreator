import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ionicsimulator',
  templateUrl: './ionicsimulator.component.html',
  styleUrls: ['./ionicsimulator.component.scss', './device.component.scss']
})
export class IonicsimulatorComponent implements OnInit {
  text$ = new BehaviorSubject<string | null>("Initial Text");
  iosref: boolean = false;
  mdref: boolean = true;
  colorHeader = '#1e56a0';
  colorSearch = '#fff';
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }
  loadText() {
    this.text$.next(null);
    setTimeout(() => {
      this.text$.next(`Loaded Text: ${new Date()}`);
    }, 1000);
  }
  ios() {
    this.iosref = true;
    this.mdref = false;
  }
  md() {
    this.iosref = false;
    this.mdref = true;
  }
}
