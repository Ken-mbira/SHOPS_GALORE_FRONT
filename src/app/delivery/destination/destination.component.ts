import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/interfaces/destination/destination';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NewDestinationComponent } from './new-destination/new-destination.component';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  newDestinationDialog(){
    this.dialog.open(NewDestinationComponent)
  }

  ngOnInit(): void {
  }

}
