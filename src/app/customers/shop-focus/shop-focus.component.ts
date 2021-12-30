import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-shop-focus',
  templateUrl: './shop-focus.component.html',
  styleUrls: ['./shop-focus.component.css']
})
export class ShopFocusComponent implements OnInit {

  constructor(private observer:BreakpointObserver) { }

  belowWidth:boolean = false;

  ngAfterViewInit():void{

    this.observer.observe(['(max-width:900px)']).subscribe((res) => {
      if(res.matches){
        this.belowWidth = true;
      }else{
        this.belowWidth = false;
      }
    })

  }

  ngOnInit(): void {
  }

}
