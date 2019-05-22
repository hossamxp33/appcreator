import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ionicsimulator',
  templateUrl: './ionicsimulator.component.html',
  styleUrls: ['./device.component.scss', './ionicsimulator.component.scss']
})
export class IonicsimulatorComponent implements OnInit {
  @Input() headerColor: any;
  @Input() sliderId: number = 1;
  source = 'sim';
  color = '#1e56a0';

  text$ = new BehaviorSubject<string | null>("Initial Text");
  iosref: boolean = false;
  mdref: boolean = true;
  colorHeader = '#1e56a0';
  colorSearch = '#fff';

  constructor() { }

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
