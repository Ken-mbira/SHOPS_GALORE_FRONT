import { Component, OnInit, Input } from '@angular/core';

import { RegisteredMeans } from 'src/app/interfaces/registered-means/registered-means';

@Component({
  selector: 'app-means-grid-view',
  templateUrl: './means-grid-view.component.html',
  styleUrls: ['./means-grid-view.component.css']
})
export class MeansGridViewComponent implements OnInit {

  @Input() registeredMeans:RegisteredMeans[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
