import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { DesignService } from 'src/app/services/design.service';
import { SubSink } from 'subsink';
import * as $ from 'jquery';
@Component({
  selector: 'app-ionicsimulator',
  templateUrl: './ionicsimulator.component.html',
  styleUrls: ['./ionicsimulator.component.scss', '../../../../assets/scss/ionic.scss']
})
export class IonicsimulatorComponent implements OnInit, OnDestroy {
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
  subs = new SubSink();
  mainDesign: any[];
  header: any;
  footer: any;
  categorydesign: any;
  productsetting: any;
  bodydesign: any;
  constructor(public sanitizer: DomSanitizer, private design: DesignService) { }
  ngOnInit() {
    // console.log(this.sliderId, this.source);
    this.subs.add(
      this.design.getInitialDesign().subscribe(res => {
        this.mainDesign = res.data;
        this.header = this.mainDesign.find(v => v.type === 'header');
        console.log(this.header);
        $('ion-header').css('background', this.header.data.background);
        this.footer = this.mainDesign.find(v => v.type === 'footer');
        this.categorydesign = this.mainDesign.find(v => v.type === 'categorydesign');
        this.productsetting = this.mainDesign.find(v => v.type === 'productsetting');
        this.bodydesign = this.mainDesign.find(v => v.type === 'bodydesign');

      }))


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
    console.log(this.header.data.background)
    $('ion-header').css('background', this.header.data.background);
  }
  md() {
    this.iosref = false;
    this.mdref = true;
    console.log(this.header.data.background)
    $('ion-header').css('background', this.header.data.background);
  }
  ngOnDestroy() {
    // this.subs.unsubscribe();
  }
}
