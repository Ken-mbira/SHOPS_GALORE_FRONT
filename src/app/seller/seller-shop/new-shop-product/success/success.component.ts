import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  @Output() productCreation = new EventEmitter();
  
  createProduct(){
    this.productCreation.emit();
  }

  ngOnInit(): void {
  }

}
