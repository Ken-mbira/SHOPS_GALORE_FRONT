import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewDeliveryMeansComponent } from './new-delivery-means/new-delivery-means.component';

import { RegisteredMeans } from 'src/app/interfaces/registered-means/registered-means';
import { DeliveryMeans } from 'src/app/interfaces/means/delivery-means';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-means',
  templateUrl: './means.component.html',
  styleUrls: ['./means.component.css']
})
export class MeansComponent implements OnInit {

  registeredMeans:RegisteredMeans[] = [];

  constructor(public dialog:MatDialog,private deliveryService:DeliveryService) { }

  openDialog():void {
    const dialogRef = this.dialog.open(NewDeliveryMeansComponent,{
    })

    dialogRef.afterClosed().subscribe((response?:RegisteredMeans) => {
      if(response){
        this.registeredMeans.push(response)
      }
    })
  }

  ngOnInit(): void {
    this.deliveryService.currentRegisteredMeans.subscribe(means => this.registeredMeans = means);
    if(this.registeredMeans.length === 0){
      this.deliveryService.getRegisteredMeans()
    };
  }
}
