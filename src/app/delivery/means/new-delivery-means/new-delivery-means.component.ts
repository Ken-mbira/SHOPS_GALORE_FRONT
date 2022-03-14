import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DeliveryMeans } from 'src/app/interfaces/means/delivery-means';
import { ListService } from 'src/app/services/lists/list.service';
import { DeliveryService } from '../../services/delivery.service'; 
import { RegisteredMeans } from 'src/app/interfaces/registered-means/registered-means';

@Component({
  selector: 'app-new-delivery-means',
  templateUrl: './new-delivery-means.component.html',
  styleUrls: ['./new-delivery-means.component.css']
})
export class NewDeliveryMeansComponent implements OnInit {

  means : DeliveryMeans[] = [];
  hasImage:boolean = false;

  constructor(public meansDialog: MatDialogRef<NewDeliveryMeansComponent>,private fb:FormBuilder,private snackBar:MatSnackBar,private deliveryService:DeliveryService) {}

  handleUpload(event){
    let image = (event.target as HTMLInputElement).files[0];
    this.imageForm.append("image",image,event.target.files.name)
    this.hasImage = true;
  }
  imageForm = new FormData();
  meansForm = this.fb.group({
    "means":["",Validators.required],
    "max_weight":["",Validators.required],
    "max_volume":["",Validators.required]
  })

  createMeans(){
    this.deliveryService.createMeans(this.meansForm).subscribe((response:RegisteredMeans) => {
      if(this.hasImage){
        this.deliveryService.updateMeansImage(this.imageForm,response.id).subscribe((imageResponse:any) =>{
          response.image = imageResponse.image;
        },error => {
          console.log(error)
          this.snackBar.open("There was a problem uploading your means image, please try again in the edit section","Try Again",{duration:3000})
        })
      }
      this.meansDialog.close(response)
    },error=>{
      this.snackBar.open("There was a problem creating your means!","Sorry",{duration:3000})
      console.log(error)
      this.meansDialog.close()
    })
  }

  cancelClick(){
    this.meansDialog.close()
  }

  ngOnInit() {
    this.deliveryService.currentMeans.subscribe(means => this.means = means);
    if(this.means.length==0){
      this.deliveryService.getMeans()
    }
  }

}
