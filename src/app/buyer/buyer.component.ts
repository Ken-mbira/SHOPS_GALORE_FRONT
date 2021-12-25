import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private observer:BreakpointObserver) { }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:900px)']).subscribe((res) => {
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close()
      }else{
        this.sidenav.mode = 'side'
        this.sidenav.open();
      }
    });
  }
  ngOnInit(): void {
  }

}
