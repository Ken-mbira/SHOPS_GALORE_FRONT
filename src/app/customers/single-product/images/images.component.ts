import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    pullDrag: true,
    merge: true,
    autoplay: false,
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
        items: 4
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }

}
