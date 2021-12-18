import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

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
