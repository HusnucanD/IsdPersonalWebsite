
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HostListener } from "@angular/core";
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    '../../../../../node_modules/keen-slider/keen-slider.css',
    './carousel.component.css'
  ]
})

export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("sliderRef", { static: true }) sliderRef: ElementRef<HTMLElement>; 
  screenWidth: number;
  images: String[];
  texts: String[] = [];
  opacities: number[] = [];
  slider: KeenSliderInstance;
  buttonText: string;
  constructor(private state: State) {
    this.getScreenSize(); 
    this.texts.push(this.state.string.landing_carousel.text1); 
    this.texts.push(this.state.string.landing_carousel.text2); 
    this.texts.push(this.state.string.landing_carousel.text3); 
    this.buttonText = this.state.string.landing_carousel.button;
  }
  ngOnInit() {
    this.setImages();
  }
  @HostListener('window:resize', ['$event']) getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.setImages();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(
        this.sliderRef.nativeElement, 
        {
          slides: this.images.length,
          loop: true,
          defaultAnimation: {
            duration: 2000,
          },
          detailsChanged: (s) => {
            this.opacities = s.track.details.slides.map((slide) => slide.portion)
          },
        },
        [
          (slider) => {
            let timeout: any;
            let mouseOver = false;
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 3500)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      );
    });
  }
  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
  setImages() {
    if (this.screenWidth < 600) {
      this.images = [
        "../../../../assets/img/carousel_1mini.jpg",
        "../../../../assets/img/carousel_2mini.jpg",
        "../../../../assets/img/carousel_3mini.jpg"
      ];
    }
    else {
      this.images = [
        "../../../../assets/img/carousel_1.jpg",
        "../../../../assets/img/carousel_2.jpg",
        "../../../../assets/img/carousel_3.jpg"
      ];
    }
  }
}
