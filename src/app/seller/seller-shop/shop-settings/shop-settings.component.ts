import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ImageUploaderComponent } from 'src/app/shared_components/image-uploader/image-uploader.component';

@Component({
  selector: 'app-shop-settings',
  templateUrl: './shop-settings.component.html',
  styleUrls: ['./shop-settings.component.css']
})
export class ShopSettingsComponent implements OnInit {

  enterImage():void{
    const dialogRef = this.imageDialog.open(ImageUploaderComponent,{
      width:'250px'
    });
    dialogRef.afterClosed().subscribe((result) => console.log(result))
  }
  constructor(public imageDialog:MatDialog) { }
  ngOnInit(): void {
  }

}
