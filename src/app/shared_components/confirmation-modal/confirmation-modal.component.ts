import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  message:string = this.data.message;

  cancelRequest(){
    this.dialogRef.close()
  }

  constructor(private dialogRef:MatDialogRef<ConfirmationModalComponent>,@Inject(MAT_DIALOG_DATA) private data:any) { }

  ngOnInit(): void {
  }

}
