import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Destination } from 'src/app/interfaces/destination/destination';
import { DeliveryService } from '../services/delivery.service';
import { NewDestinationComponent } from './new-destination/new-destination.component';
import { RegisteredMeans } from 'src/app/interfaces/registered-means/registered-means';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})

// const destinations:Destination[] = [];

export class DestinationComponent implements OnInit {

  destinations:Destination[] = []
  dataSource = new MatTableDataSource(this.destinations);
  registeredMeans:RegisteredMeans[] = [];
  displayedColumns = ['id','means','location_from','location_to','price']

  constructor(private dialog:MatDialog,private deliveryService:DeliveryService,private snackBar:MatSnackBar) { }

  newDestinationDialog(){
    const dialogRef = this.dialog.open(NewDestinationComponent,{
      data:this.registeredMeans,
      minWidth: '360px',
    });
    dialogRef.afterClosed().subscribe((response?:Destination)=>{
      if(response){
        this.destinations.push(response)
        this.dataSource = new MatTableDataSource(this.destinations);
      }
    })
  }

  ngOnInit(): void {
    this.deliveryService.currentDestinations.subscribe(destinations => {
      this.destinations = destinations
      this.dataSource = new MatTableDataSource(this.destinations)
    })

    this.deliveryService.getDestinations()

    this.deliveryService.currentRegisteredMeans.subscribe(means => this.registeredMeans = means)
    if(this.registeredMeans.length === 0){
      this.deliveryService.getRegisteredMeans()
    }
  }

}
