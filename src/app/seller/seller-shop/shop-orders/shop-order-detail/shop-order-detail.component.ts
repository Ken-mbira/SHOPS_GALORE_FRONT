import { Component, OnInit } from '@angular/core';


export interface Order {
  name: string;
  position: number;
  quantity: number;
  product_id: any;
}

const ORDER_DATA: Order[] = [
  {position: 1, name: 'Hydrogen', quantity: 1, product_id: 123},
];


@Component({
  selector: 'app-shop-order-detail',
  templateUrl: './shop-order-detail.component.html',
  styleUrls: ['./shop-order-detail.component.css']
})
export class ShopOrderDetailComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'quantity', 'id'];
  dataSource = ORDER_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
