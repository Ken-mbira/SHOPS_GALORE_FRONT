import { Component, OnInit } from '@angular/core';

export interface Order{
  id:number;
  date:Date;
  items:number;
  price:string;
}

const ORDER_DATA:Order[] = [
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
  { id:1, date:new Date(12/12/2112),items:23,price:"2,1212" },
]

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id','date','items','price','view']

  dataSource = ORDER_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
