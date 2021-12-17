import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-service-slider',
  templateUrl: './service-slider.component.html',
  styleUrls: ['./service-slider.component.css']
})
export class ServiceSliderComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    pullDrag: true,
    merge: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    margin: 0,
    autoplayMouseleaveTimeout: 2000,
    dots: true,
    navSpeed: true,
    autoplaySpeed: 3000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }

}
