import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {

  constructor() { }
  checked = false;

  setChecked(){
    this.checked = true;
  }

  ngOnInit(): void {
  }

}
