import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  images:any[] = [
    {src: '../../../../assets/marjan-blan-marjanblan-_zdAcilqUaw-unsplash.jpg',highlighted:true},
    {src: '../../../../assets/andrew-pons-cLHPacdtpSY-unsplash (1).jpg',highlighted:false},
    {src: '../../../../assets/andrew-pons-cLHPacdtpSY-unsplash (1).jpg',highlighted:false},
    {src: '../../../../assets/andrew-pons-cLHPacdtpSY-unsplash (1).jpg',highlighted:false}
  ]

  highlighted:any;

  findHighlited(){
    for(let i=0;i<this.images.length; i++){
      if(this.images[i].highlighted === true){
        this.highlighted = this.images[i]
      }
    }
  }

  makeHighlited(index:any){
    this.highlighted = this.images[index]
  }

  customOptions: OwlOptions = {
    pullDrag: true,
    merge: true,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 10,
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
    this.findHighlited()
  }

}
