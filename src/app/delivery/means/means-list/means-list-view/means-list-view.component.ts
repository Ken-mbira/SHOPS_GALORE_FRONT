import { Component, OnInit, Input } from '@angular/core';

import { RegisteredMeans } from 'src/app/interfaces/registered-means/registered-means';

@Component({
  selector: 'app-means-list-view',
  templateUrl: './means-list-view.component.html',
  styleUrls: ['./means-list-view.component.css']
})
export class MeansListViewComponent implements OnInit {

  @Input() registeredMeans:RegisteredMeans[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
