import { Component, OnInit } from '@angular/core';
import { TreeData } from 'mat-tree-select-input';
import { FormGroup,FormGroupDirective } from '@angular/forms'

import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.css']
})
export class SelectLocationComponent implements OnInit {

  newShopForm : FormGroup;

  constructor(private rootFormGroup:FormGroupDirective,private locationService:LocationService) { }

  locations:TreeData[] = []

  ngOnInit(): void {
    this.newShopForm = this.rootFormGroup.control
    this.locationService.currentLocations.subscribe(value => this.locations= value)
    this.locationService.getLocations()
  }

}
