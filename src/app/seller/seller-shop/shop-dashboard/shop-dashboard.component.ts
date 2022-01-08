import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

import { ShopService } from '../../services/shop.service';
import { Shop } from 'src/app/interfaces/shop/shop'

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css']
})
export class ShopDashboardComponent implements OnInit {

  shop:Shop;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40,45,45,2,35,46 ],
        label: 'Series A',
        backgroundColor: 'rgba(43,42,56,0.2)',
        borderColor: '#2B2A38',
        pointBackgroundColor: '#E86105',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        }
    },
  }
  public lineChartType: ChartType = 'line';

  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.shopService.currentShop.subscribe(shop => this.shop = shop)
  }

}
