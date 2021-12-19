import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FillIdComponent } from './fill-id/fill-id.component';

@Component({
  selector: 'app-dropoff',
  templateUrl: './dropoff.component.html',
  styleUrls: ['./dropoff.component.css']
})
export class DropoffComponent implements OnInit {

  panelOpenState = false;

  id:number

  constructor(public dialog:MatDialog) { }

  openDialog():void{
    const dialogRef = this.dialog.open(FillIdComponent, {
      width :  '250px',
      data : {id:this.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.id = result;
      console.log(this.id)
    });
  }

  ngOnInit(): void {
  }

}
