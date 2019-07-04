import { SlideshowService } from 'src/app/services/slideshow.service';
import { DesignService } from 'src/app/services/design.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  headerColor: any;
  images: any;
  ionImages;
  // imagesDisplay: any;
  uploadedFile: any;
  @Input() id;
  @Input() source: string;
  @Input() imagesDisplay;
  @Input() ionImagesDisplay;

  slideOpts = {
    autoplay: true,
    speed: 400,
    loop: true,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          $slideEl
            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;

            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    }
  };
  constructor(private desginService: DesignService, private slideshowService: SlideshowService) { }

  ngOnInit() {
    // console.log(this.ionImagesDisplay)
    // console.log(this.id , this.source);
    if ((this.imagesDisplay && this.imagesDisplay.length > 0) || (this.ionImagesDisplay && this.ionImagesDisplay.length > 0)) {

      this.images = this.imagesDisplay;

      this.ionImages = this.ionImagesDisplay

      // console.log(this.ionImagesDisplay)
      console.log(this.images)
    }
    else {
      this.images = [{
        photo: "../../../../assets/images/no-image.png"
      }]
    }
    this.desginService.sliderId.subscribe(res => {
      this.id = res;
      console.log(res, this.id)
    })

  }
  getSliderId(id) {
    // console.log(id);
    this.desginService.sliderId.next(id);
    this.desginService.editDesign({
      type_id: 1,
      fieldname: "slider_template",
      value: id
    })
  }
  ngOnChanges() {
    console.log(this.imagesDisplay);

    if (this.imagesDisplay && this.imagesDisplay.length == 0) {
      this.images = [{
        photo: "../../../../assets/images/no-image.png"
      }]
    } else {
      this.images = this.imagesDisplay;
      this.slideshowService.sliderImages.next(this.imagesDisplay)
    }
  }



}
