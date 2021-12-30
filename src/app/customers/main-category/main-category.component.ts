import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css']
})
export class MainCategoryComponent implements OnInit {

  constructor(private observer:BreakpointObserver) { }

  belowWidth:boolean = false;

  ngAfterViewInit():void{

    this.observer.observe(['(max-width:900px)']).subscribe((res) => {
      if(res.matches){
        this.belowWidth = true;
      }else{
        this.belowWidth = false;
      }
    })

  }

  ngOnInit(): void {
  }

}
