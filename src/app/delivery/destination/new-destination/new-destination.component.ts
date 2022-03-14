import { Component, OnInit } from '@angular/core';

import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TreeData } from 'mat-tree-select-input';
// import { Location } from 'src/app/interfaces/location/location';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-new-destination',
  templateUrl: './new-destination.component.html',
  styleUrls: ['./new-destination.component.css']
})
export class NewDestinationComponent implements OnInit {

  locations:TreeData[] = [];

  destinationForm = this.fb.group({
    price:[0,Validators.required],
    means:[0,Validators.required],
    location_from:[0,Validators.required],
    location_to:[0,Validators.required]
  })

  constructor(private fb: FormBuilder,private locationService:LocationService) {
}

  ngOnInit() {
    if(this.locations.length<1){
      this.locationService.currentLocations.subscribe(locations => this.locations = locations)
      this.locationService.getLocations()
    }
  }

}
