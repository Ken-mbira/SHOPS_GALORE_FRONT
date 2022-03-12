import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {

  constructor(private dialogRef: MatDialogRef<ImageUploaderComponent>,private snackBar:MatSnackBar) { }

  showImage(event){
    let images = event.target.files;

    if (images.length === 0){
      this.snackBar.open("Please upload an image!","Try Again",{duration:3000});
      return;
    }
    
    const mimeType = images[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.snackBar.open("Only images are allowed!","Try Again",{duration:3000});
    }else{
      this.dialogRef.close(event);
    }
  }

}
