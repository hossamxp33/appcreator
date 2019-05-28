import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ionicsimulator',
  templateUrl: './ionicsimulator.component.html',
  styleUrls: ['./ionicsimulator.component.scss']
})
export class IonicsimulatorComponent implements OnInit {
  @Input() headerColor: any;
  @Input() sliderId: number = -1;
  source = 'sim';
  color = '#1e56a0';
  deSlideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: true,
  };
  text$ = new BehaviorSubject<string | null>("Initial Text");
  iosref: boolean = false;
  mdref: boolean = true;
  colorHeader = '#1e56a0';
  colorSearch = '#fff';

  constructor(public sanitizer: DomSanitizer) { }
  ngOnInit() {
    // console.log(this.sliderId, this.source);
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
