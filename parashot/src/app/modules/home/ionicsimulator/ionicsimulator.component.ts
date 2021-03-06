import { SlideshowService } from './../../../services/slideshow.service';
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
  @ViewChild(IonSlides) slides: IonSlides;
  // slidePrev() {
  //   this.slides.slidePrev();
  // }
  slideNext() {
    this.slides.slideNext();
  }
  @Input() headerColor: any;
  @Input() sliderId: number = -1;
  source = "sim";
  color = "#1e56a0";
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
  colorHeader = "#1e56a0";
  colorSearch = "#fff";
  subs = new SubSink();
  // mainDesign: any;
  header: any;
  footer: any;
  categorydesign: any;
  productsetting: any;
  bodydesign: any;
  main;
  slider;
  private loading;
  splash: Splash;
  showSlideShow: boolean;
  imageUrl;
  constructor(
    public splashService: SplashService,
    private design: DesignService,
    public loadingController: LoadingController,
    private slideshowService: SlideshowService

  ) { }
  ngOnInit() {
    this.subs.add(
      this.splashService.getSplashs().subscribe((res: Splash) => {
        this.splash = res;
        console.log(this.splash);
        this.splashLoader();

      }),
      this.design.getInitialDesign().subscribe(res => {
        let mainDesign = new Design(res.data);
        this.header = mainDesign.header;
        this.footer = mainDesign.footer;
        this.bodydesign = mainDesign.bodydesign;
        this.categorydesign = mainDesign.categorydesign;
        this.productsetting = mainDesign.productsetting;
        this.main = mainDesign.main;

        if (this.main.data.slideshow === "true") {
          console.log(this.main.data.slideshow)
          this.showSlideShow = true;
          // this.mainPageService.getMainPage().subscribe((res: MainPageModel) => {
          // this.slideshowService.getSlideShows();
          this.slideshowService.sliderImages.subscribe(res => {
            console.log(res)
            this.slider = res;
          })

        }
        else {
          this.showSlideShow = false;

        }
      }),


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
        duration: 3000
      })
      .then(overlay => {
        this.loading = overlay;
        this.loading.present();
        console.log(this.splash.data[0].photo)
        $("ion-loading").css('background', `url(${this.splash.data[1].photo}) 100% 100% no-repeat`).prependTo($(".screen"));
      });
  }
}
