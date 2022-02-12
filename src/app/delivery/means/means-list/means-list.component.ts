import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-means-list',
  templateUrl: './means-list.component.html',
  styleUrls: ['./means-list.component.css']
})
export class MeansListComponent implements OnInit {

  gridView:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
