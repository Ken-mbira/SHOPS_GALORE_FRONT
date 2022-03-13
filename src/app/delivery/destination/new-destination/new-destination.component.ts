import { Component, OnInit } from '@angular/core';

import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-destination',
  templateUrl: './new-destination.component.html',
  styleUrls: ['./new-destination.component.css']
})
export class NewDestinationComponent implements OnInit {

  destinationForm = this.fb.group({
    price:[0,Validators.required],
    means:[0,Validators.required],
    location_from:[0,Validators.required],
    location_to:[0,Validators.required]
  })

  constructor(private fb: FormBuilder) {
}

  ngOnInit() {
  }

}
