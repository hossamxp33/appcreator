import { Design } from "./../../../helpers/design";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from "rxjs";
import { DesignService } from "src/app/services/design.service";
import { SplashService } from "src/app/services/splash.service";
import { SubSink } from "subsink";
import * as $ from "jquery";
import { LoadingController } from "@ionic/angular";
import { Splash } from "src/app/models/splash.model";

@Component({
  selector: "app-ionicsimulator",
  templateUrl: "./ionicsimulator.component.html",
  styleUrls: [
    "./ionicsimulator.component.scss",
    "../../../../assets/scss/ionic.scss"
  ]
})
export class IonicsimulatorComponent implements OnInit, OnDestroy {
  @Input() headerColor: any;
  @Input() sliderId: number = -1;
  source = "sim";
  color = "#1e56a0";
  deSlideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: true
  };
  text$ = new BehaviorSubject<string | null>("Initial Text");
  iosref: boolean = false;
  mdref: boolean = true;
  colorHeader = "#1e56a0";
  colorSearch = "#fff";
  subs = new SubSink();
  // mainDesign: any;
  header: any;
  footer: any;
  categorydesign: any;
  productsetting: any;
  bodydesign: any;
  private loading;
  splash: Splash;
  imageUrl;
  constructor(
    public splashService: SplashService,
    private design: DesignService,
    public loadingController: LoadingController,
    private sanitizer: DomSanitizer
  ) { }
  ngOnInit() {
    this.subs.add(
      this.design.getInitialDesign().subscribe(res => {
        let mainDesign = new Design(res.data);
        this.header = mainDesign.header;
        this.footer = mainDesign.footer;
        this.bodydesign = mainDesign.bodydesign;
        this.categorydesign = mainDesign.categorydesign;
        this.productsetting = mainDesign.productsetting;
        // console.log(this.header, this.footer, this.bodydesign);
      }),
      this.splashService.getSplashs().subscribe((res: Splash) => {
        this.splash = res;
        console.log(this.splash);
        this.splashLoader();

      })
    );

  }

  ios() {
    this.iosref = true;
    this.mdref = false;
    console.log(this.header.data.background);
    $(".screen ion-header").css("background", this.header.data.background);
    this.splashLoader();
  }
  md() {
    this.iosref = false;
    this.mdref = true;
    console.log(this.header.data.background);
    $(".screen ion-header").css("background", this.header.data.background);
    this.splashLoader();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  splashLoader() {
    // console.log("sss");
    this.loadingController
      .create({
        // spinner: "bubbles",
        message: ``,
        animated: true,
        // backdropDismiss: true,
        showBackdrop: true,
        cssClass: "custom-class custom-loading",
        // duration: 3000
      })
      .then(overlay => {
        this.loading = overlay;
        this.loading.present();
        console.log(this.splash.data[0].photo)
        $("ion-loading").css('background', `url(${this.splash.data[0].photo}) 100% 100% no-repeat`).prependTo($(".screen"));
      });
  }
}
