import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-delivery-means',
  templateUrl: './new-delivery-means.component.html',
  styleUrls: ['./new-delivery-means.component.css']
})
export class NewDeliveryMeansComponent implements OnInit {

  constructor(public meansDialog: MatDialogRef<NewDeliveryMeansComponent>) {}

  cancelClick(){
    this.meansDialog.close();
  }

  ngOnInit() {
  }

}
