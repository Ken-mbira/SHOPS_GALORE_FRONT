import { Component, OnInit, Input } from '@angular/core';

import { Destination } from 'src/app/interfaces/destination/destination';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  @Input() destinations:Destination[];

  displayedColumns = ['id','means','location_from','location_to']

  constructor() { }

  ngOnInit(): void {
  }

}
