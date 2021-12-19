import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.css']
})
export class TransitComponent implements OnInit {

  constructor() { }

  checked = false;

  setChecked(){
    this.checked = true;
  }

  ngOnInit(): void {
  }

}
