import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    pullDrag:true,
    merge:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:5000,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    margin:0,
    autoplayMouseleaveTimeout:2000,
    dots:false,
    navSpeed: true,
    autoplaySpeed:3000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }

}
