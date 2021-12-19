import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fill-id',
  templateUrl: './fill-id.component.html',
  styleUrls: ['./fill-id.component.css']
})
export class FillIdComponent implements OnInit {


  id:number;

  constructor(public dialogRef: MatDialogRef<FillIdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
  ) {}

  close():void{
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }
}
