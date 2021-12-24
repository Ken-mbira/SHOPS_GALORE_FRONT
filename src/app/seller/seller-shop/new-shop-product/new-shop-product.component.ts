import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { TreeData } from 'mat-tree-select-input';

@Component({
  selector: 'app-new-shop-product',
  templateUrl: './new-shop-product.component.html',
  styleUrls: ['./new-shop-product.component.css']
})
export class NewShopProductComponent implements OnInit {

  checkVariation(boolean:boolean){
    this.hasVariations = boolean
  }
  hasVariations = false;

  options: TreeData[] = [
    {
      name: 'Electronics',
      value: 'Electronics',
      children: [
        {
          name: 'Phones',
          value: 'Phones',
          children: [
            {
              name: 'Iphones',
              value: 'Iphones', 
              children: []
              
            } 
          ]
        }
      ]
    },
   
    {
      name: 'Web Development',
      value: 'Web Development',
      children: [
        {
          name: 'Frontend Development',
          value: 'Frontend Development',
          children: [
            {
              name: 'Angular',
              value: 'Angular',
              children: []

              
            },
            {
              name: 'React',
              value: 'React',
              children: []

              
            }
          ]
        }
      ]
    },
  ]


  isLinear = false;

  stepperOrientation:Observable<StepperOrientation>

  constructor(breakpointbserver:BreakpointObserver) {
    this.stepperOrientation = breakpointbserver
    .observe('(min-width:600px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' :
    'vertical')));
  }


  ngOnInit() {
  }
}
