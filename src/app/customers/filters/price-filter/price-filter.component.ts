import { Component, OnInit } from '@angular/core';

import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnInit {

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<span>Min price:</span> KSH" + value;
        case LabelType.High:
          return "<span>Max price:</span> KSH" + value;
        default:
          return "KSH" + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
