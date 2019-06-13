import { Design } from "./../../../helpers/design";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
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
  constructor(
    public splashService: SplashService,
    private design: DesignService,
    public loadingController: LoadingController
  ) {}
  ngOnInit() {
    this.splashLoader();

    // console.log(this.sliderId, this.source);
    this.subs.add(
      this.design.getInitialDesign().subscribe(res => {
        let mainDesign = new Design(res.data);
        this.header = mainDesign.header;
        this.footer = mainDesign.footer;
        this.bodydesign = mainDesign.bodydesign;
        this.categorydesign = mainDesign.categorydesign;
        this.productsetting = mainDesign.productsetting;
        console.log(this.header, this.footer, this.bodydesign);
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
    console.log("sss");
    this.loadingController
      .create({
        spinner: "crescent",
        message: ``,
        cssClass: "custom-class custom-loading",
        duration: 3000
      })
      .then(overlay => {
        this.splashService.getSplashs().subscribe((res: Splash) => {
          this.splash = res;
          console.log(this.splash);
        });
        this.loading = overlay;
        this.loading.present();
        $("ion-loading").prependTo($(".screen"));
      });
  }
}
