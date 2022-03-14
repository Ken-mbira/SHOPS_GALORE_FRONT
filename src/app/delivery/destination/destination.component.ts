import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Destination } from 'src/app/interfaces/destination/destination';
import { DeliveryService } from '../services/delivery.service';
import { NewDestinationComponent } from './new-destination/new-destination.component';
import { RegisteredMeans } from 'src/app/interfaces/registered-means/registered-means';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  destinations:Destination[] = [];
  registeredMeans:RegisteredMeans[] = [];

  constructor(private dialog:MatDialog,private deliveryService:DeliveryService,private snackBar:MatSnackBar) { }

  newDestinationDialog(){
    const dialogRef = this.dialog.open(NewDestinationComponent,{
      data:this.registeredMeans
    });
    dialogRef.afterClosed().subscribe((response?:FormGroup)=>{
      if(response){
        this.deliveryService.createDestination(response).subscribe((response:Destination) => this.destinations.push(response),error => {
          console.log(error)
          this.snackBar.open("Sorry there was a problem creating this destination","Sorry",{duration:3000})
        })
      }
    })
  }

  ngOnInit(): void {
    this.deliveryService.currentDestinations.subscribe(destinations => this.destinations = destinations)

    if(this.destinations.length === 0){
      this.deliveryService.getDestinations()
    }

    this.deliveryService.currentRegisteredMeans.subscribe(means => this.registeredMeans = means)
    if(this.registeredMeans.length === 0){
      this.deliveryService.getRegisteredMeans()
    }
  }

}
