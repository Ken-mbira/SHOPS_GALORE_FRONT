import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {

  encapsulation: ViewEncapsulation.None
  constructor() { }

  ngOnInit(): void {
  }

}
