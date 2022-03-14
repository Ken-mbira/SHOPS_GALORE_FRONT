import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TreeData } from 'mat-tree-select-input';
import { LocationService } from 'src/app/services/location/location.service';
import { RegisteredMeans } from 'src/app/interfaces/registered-means/registered-means';

@Component({
  selector: 'app-new-destination',
  templateUrl: './new-destination.component.html',
  styleUrls: ['./new-destination.component.css']
})
export class NewDestinationComponent implements OnInit {

  locations:TreeData[] = [];

  destinationForm = this.fb.group({
    price:["",Validators.required],
    means:["",Validators.required],
    location_from:["",Validators.required],
    location_to:["",Validators.required]
  })

  constructor(private fb: FormBuilder,private locationService:LocationService,private matDialog:MatDialogRef<NewDestinationComponent>,@Inject(MAT_DIALOG_DATA) public data:RegisteredMeans[]) {
}
  stageCreation(){
    this.destinationForm.patchValue({location_from : this.destinationForm.value.location_from.value})
    this.destinationForm.patchValue({location_to : this.destinationForm.value.location_to.value})
    this.matDialog.close(this.destinationForm)
  }

  ngOnInit() {
    this.locationService.currentLocations.subscribe(locations => this.locations = locations)
    if(this.locations.length === 0){
      this.locationService.getLocations()
    }
  }

}
