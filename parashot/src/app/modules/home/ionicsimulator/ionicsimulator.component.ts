import { HeadersPageComponent } from './../headers-page/headers-page.component';
import { MainpageService } from "./../../../services/mainpage.service";
import { SlideshowService } from "./../../../services/slideshow.service";
import { Design } from "./../../../helpers/design";
import { Component, OnInit, Input, OnDestroy, ViewChild } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DesignService } from "src/app/services/design.service";
import { SplashService } from "src/app/services/splash.service";
import { SubSink } from "subsink";
import * as $ from "jquery";
import { LoadingController, IonSlides } from "@ionic/angular";
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
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  // slidePrev() {
  //   this.slides.slidePrev();
  // }
  slideNext() {
    this.slides.slideNext();
  }
  @Input() headerColor: any;
  @Input() sliderId: number = 3;
  source = "sim";
  color = "#1e56a0";
  rate = 5;
  ionSlider;
  deSlideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: true
  };
  xOptions = {
    slidesPerView: 5,
    loop: true,
    autoplay: true
  }

  text$ = new BehaviorSubject<string | null>("Initial Text");
  colorHeader = "#1e56a0";
  colorSearch = "#fff";
  subs = new SubSink();
  iosClass: boolean = true;
  mdClass: boolean = false;
  // mainDesign: any;
  header: any;
  footer: any;
  categorydesign: any;
  productsetting: any;
  bodydesign: any;
  main;
  slider;
  productsId;
  private loading;
  splash: Splash;
  showSlideShow: boolean;
  imageUrl;
  constructor(
    public splashService: SplashService,
    private design: DesignService,
    public loadingController: LoadingController,
    private slideshowService: SlideshowService,
    private mainPageService: MainpageService,
  ) { }
  ngOnInit() {


    this.subs.add(
      this.design.productsId.subscribe(res => {
        this.productsId = res;
        console.log(this.productsId)
      }),
      this.design.sliderId.subscribe(res => {
        this.sliderId = res;
        console.log(this.sliderId)
      }),
      this.splashService.getSplashs().subscribe((res: Splash) => {
        this.splash = res;
        console.log(this.splash);
        this.splashLoader();

      }),
      this.design.getInitialDesign().subscribe(res => {
        let mainDesign = new Design(res.data);
        this.header = mainDesign.header;
        $("ion-header").css("background", this.header.data.background);
        $(".ion-logo img").attr("src", this.header.data.logo);
        this.footer = mainDesign.footer;
        $('ion-tab-bar').css('--background', this.footer.data.background)
        $('ion-tab-bar ion-label').css('--background', this.footer.data.font_color)
        this.bodydesign = mainDesign.bodydesign;
        $('ion-content').css('--background', this.bodydesign.data.background)
        this.categorydesign = mainDesign.categorydesign;
        this.productsetting = mainDesign.productsetting;
        this.main = mainDesign.main;
        console.log(this.main.data.slideshow);
        if (this.main.data.slideshow === "true") {
          console.log(this.main.data.slideshow);
          this.showSlideShow = true;

          // this.mainPageService.getMainPage().subscribe((res: MainPageModel) => {
          // this.slideshowService.getSlideShows();
          this.slideshowService.getSlideShows().subscribe(res => {
            console.log(res);
            this.slider = res.data;
          });
        } else {
          this.showSlideShow = false;
        }
      }),
      this.mainPageService.getMainPage().subscribe(res => {
        console.log(res);
        this.ionSlider = res.sliders;
        console.log(this.ionSlider);
      }),

    );



  }

  ios() {
    $(".note8").css("display", "none");
    $(".iphone-x").css("display", "block");
    this.iosClass = true;
    this.mdClass = false;
  }
  md() {
    $(".iphone-x").css("display", "none");
    $(".note8").css("display", "block");
    this.mdClass = true;
    this.iosClass = false;
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
        duration: 2000
      })
      .then(overlay => {
        this.loading = overlay;
        console.log(this.splash.data[0].photo);
        $("ion-loading")
          .css(
            "background",
            `url(${this.splash.data[0].photo}) 100% 100% no-repeat`
          )
          .prependTo($(".iphone-x .screen"));
        $(".iphone-x").css("display", "block");
        $(".note8").css("display", "none");
        this.loading.present();

      });
  }
  skip() {
    this.showSlideShow = false;

  }
}
