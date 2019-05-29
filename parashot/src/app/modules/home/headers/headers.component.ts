import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ImageSnippet } from '../../../shared/models/imageSnppit.model';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  headerColor: any;
  images: any;
  imagesDisplay: any;
  uploadedFile: any;
  @Input() id: number = 1;
  @Input() source: string;
  @Output() sliderId = new EventEmitter<number>();
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
  constructor() { }

  ngOnInit() {
    // console.log(this.id , this.source);
    this.headerColor = 'white';
    this.images = [{ "name": '../../../../assets/images/modern-furniture-seating_large.jpg' },
    { "name": '../../../../assets/images/2Modern-Top-10-Modern-Sofas-Gus-Atwood-Sofa-Urban-Tweed.png' },
    { "name": '../../../../assets/images/bfe73085b6a296fbf1c0b6b584d1453c--living-room-grey-living-room-side-tables.jpg' }];
    // this.images1 = ['../../../../assets/images/58933461_2232195253524681_5787888431916908544_n.jpg',
    //   '../../../../assets/images/60136386_2261895037221369_2823275448987811840_n.png',
    //   '../../../../assets/images/60364039_2261449820599224_7930565118159486976_n.png'];
    // this.images2 = ['../../../../assets/images/1.jpg', '../../../../assets/images/2.jpg', '../../../../assets/images/3.jpg']
    // this.images3 = ['../../../../assets/images/nike-vapormax-2019-womens-pink-white-ar6632-105-3.jpg',
    //   '../../../../assets/images/background-pink-vintage.jpg',
    //   '../../../../assets/images/pink-spring-outfit-ideas.png'];
    this.imagesDisplay = this.images;
  }
  getSliderId(id) {
    // console.log(id);
    this.sliderId.emit(id);
  }
  addImg() {

  }
  deleteImg(name) {
    this.imagesDisplay = this.imagesDisplay.filter(img => img.name != name);

  }

  processFile(imagesInput) {
    const file: File = imagesInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.uploadedFile = new ImageSnippet(event.target.result, file);
      this.imagesDisplay.push({ "name": "../../../../assets/images/" + this.uploadedFile.file.name });
      console.log(this.imagesDisplay)
    });
    reader.readAsDataURL(file);
  }
}
