import { RegisteredMeans } from './../../../interfaces/registered-means/registered-means';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-means-list',
  templateUrl: './means-list.component.html',
  styleUrls: ['./means-list.component.css']
})
export class MeansListComponent implements OnInit {

  @Input() registeredMeans:RegisteredMeans[] = [];

  gridView:boolean = true;
  changeGrid(value:boolean){
    localStorage.setItem("meansGridView",JSON.stringify(value))
    this.gridView = value;
  }

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("meansGridView")){
      this.gridView = Boolean(JSON.parse(localStorage.getItem("meansGridView")));
    }
  }

}
