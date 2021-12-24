import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.css']
})
export class SingleProductDetailsComponent implements OnInit {

  constructor() { }

  default:any;

  findDefault(){
    for(let i=0;i<this.images.length;i++){
      if(this.images[i].isDefault){
        this.default = this.images[i]
      }
    }
  }

  setDefault(i:any){
    this.images[i].isDefault = true;
    this.default =  this.images[i]
  }

  images:any = [
  ]

  deleteImage(i:any){
    if(this.default == this.images[i]){
      this.default=null;
    }
    this.images.splice(i,1);
  }

  fileBrowseHandler(event){
    console.log(event.files[0])
    var reader = new FileReader();
    reader.readAsDataURL(event.files[0])

    reader.onload = (_event) => {
      var image = {src : reader.result,isDefault: false}
      this.images.push(image)
    }
  }

  ngOnInit(): void {
    this.findDefault()
  }

}
