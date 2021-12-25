import { Component, OnInit } from '@angular/core';

export interface Order{
  id:number;
  product_name:string;
  quantity:number;
  price:string;
}

const ORDER_ITEMS:Order[] = [
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
  {id:1,product_name:"Handkerchief",quantity:3,price:"2,121"},
]

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {

  displayedColumns: string[] = ['id','name','quantity','price']

  dataSource = ORDER_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
