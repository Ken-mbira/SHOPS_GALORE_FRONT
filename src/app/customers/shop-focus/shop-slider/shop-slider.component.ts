import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shop-slider',
  templateUrl: './shop-slider.component.html',
  styleUrls: ['./shop-slider.component.css']
})
export class ShopSliderComponent implements OnInit {

  customOptions: OwlOptions = {
    pullDrag: true,
    merge: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 20,
    autoplayMouseleaveTimeout: 2000,
    dots: true,
    navSpeed: true,
    autoplaySpeed: 3000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
