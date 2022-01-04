import { Component, OnInit } from '@angular/core';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface Category{
  name: string;
  id:number;
  children? : Category[];
}

const TREE_DATA: Category[] = [
  { 
    name:"Clothing", id:1, children:[
      { name:"Men's Clothing", id:2},
      { name:"Women's Clothing", id:3,children:[
        { name:"Men's Clothing", id:2},
        { name:"Men's Clothing", id:2, children:[
          { name:"Men's Clothing", id:2},
          { name:"Men's Clothing", id:2},
        ]},
      ]
    }
    ]
  },
  { name:"Electronics", id:4, children:[
      {name:"Speakers", id:5},
      {name:"Television", id:6},
    ]
  }
]

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  treeControl = new NestedTreeControl<Category>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Category>()

  constructor() {
    this.dataSource.data = TREE_DATA
  }

  hasChild = (_: number, node: Category) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
