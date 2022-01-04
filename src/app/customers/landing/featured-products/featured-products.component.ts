import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  constructor() { }

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
    dots: false,
    navSpeed: true,
    autoplaySpeed: 3000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      500:{
        items:3
      },
      740: {
        items: 4
      },
      1000: {
        items: 5
      },
      1155: {
        items: 6
      },
      1300:{
        items:7
      },
      1400:{
        items:8
      },
      1600:{
        items:9
      },1900:{
        items:10
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }

}
