import {Component,OnInit} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  row:boolean = false;


  products:Product[] = [
    {imageUrl:"https://picsum.photos/200", name:"Leather Jacket", quantity:3,price:2345,subTotal:12345},
    {imageUrl:"https://picsum.photos/200", name:"Leather Jacket", quantity:3,price:2345,subTotal:12345},
  ]
  

  constructor(private observer:BreakpointObserver) { }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:992px)']).subscribe((res) => {
      if (res.matches){
        this.row = false
      }else{
        this.row = true
      }
    });
  }

  ngOnInit():void {

  }

}

export interface Product{
  imageUrl: string;
  name:string;
  quantity:number;
  price:number;
  subTotal:number
}