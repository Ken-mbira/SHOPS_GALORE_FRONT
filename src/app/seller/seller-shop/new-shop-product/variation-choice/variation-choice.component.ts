import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-variation-choice',
  templateUrl: './variation-choice.component.html',
  styleUrls: ['./variation-choice.component.css']
})
export class VariationChoiceComponent implements OnInit {
  chosen:boolean;

  @Output() variationChoice = new EventEmitter<boolean>();

  chooseVariation(choice:boolean){
    this.chosen = true;
    this.variationChoice.emit(choice)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
