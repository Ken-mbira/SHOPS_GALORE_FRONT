import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewDeliveryMeansComponent } from './new-delivery-means/new-delivery-means.component';

@Component({
  selector: 'app-means',
  templateUrl: './means.component.html',
  styleUrls: ['./means.component.css']
})
export class MeansComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  openDialog():void {
    this.dialog.open(NewDeliveryMeansComponent,{
      width: '300px'
    })
  }

  ngOnInit(): void {
  }
}
