import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';


import { Product } from 'src/app/interfaces/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ListService } from 'src/app/services/lists/list.service';
import { Image } from 'src/app/interfaces/image/image';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { Stock } from 'src/app/interfaces/stock/stock';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.css']
})
export class SingleProductDetailsComponent implements OnInit {

  @Input() product:Product;

  updateImageForm = this.fb.group({
    image:['',Validators.required]
  })

  myDatePipe!:any
  maxDate:Date;

  stockForm = this.fb.group({
    count:['',Validators.required],
    last_stock_check_date:['',Validators.required],
    product:['',Validators.required]
  })

  constructor(private productService:ProductService,private listService:ListService,private matSnackBar:MatSnackBar,private fb:FormBuilder,private dialog:MatDialog,private datePipe:DatePipe) {
    this.myDatePipe = datePipe
  }

  checkoutImage(image:Image){
    const dialogRef = this.dialog.open(ImageModalComponent,{
      maxWidth:'95vw',
      maxHeight:'95vh',
      height:'100%',
      width:'100%',
      data:{
        image:image
      },
      panelClass: 'app-full-bleed-dialog', 
    })
  }

  default():Image {
    let image:Image;
    for(let i=0;i<this.product.product_images.length;i++){
      if(this.product.product_images[i].is_default){
        image = this.product.product_images[i]
      }
    }
    return image
  }

  setDefault(id:number){
    for(let i=0;i<this.product.product_images.length;i++){
      if(this.product.product_images[i].id === id){
        this.product.product_images[i].is_default=true;
      }
    }
  }

  createImage(event){
    let form = new FormData();
    form.append("image",event.target.files[0],event.target.files.name)
    this.productService.createImage(this.product.id,form).subscribe(response=>{
      let new_image = this.listService.constructSingleImageData(response)
      this.product.product_images.push(new_image)
    },error => {
      this.matSnackBar.open("There was a problem updating your image","Sorry",{duration:3000})
      console.log(error)
    })
  }

  changeDefault(index:number){
    let old_image = this.product.product_images[index]
    this.updateImageForm.patchValue({"image":old_image.id.toString()})
    this.productService.changeDefaultImage(this.product.id,this.updateImageForm).subscribe(response => {
      this.product.product_images.splice(index,1)
      let image:Image = this.listService.constructSingleImageData(response)
      this.product.product_images.push(image)
    },error=>{
      this.matSnackBar.open("There was a problem updating your image","Sorry",{duration:3000})
      console.log(error)
    })
  }

  delete_image(index:number){
    let image = this.product.product_images[index]
    this.productService.deleteImage(image.id).subscribe(response => {
      this.matSnackBar.open(`${response}`,"Okay",{duration:3000})
      this.product.product_images.splice(index,1)
    },error =>{
      console.log(error)
    })
  }

  updateStockCheckDate = event => this.product.stock.last_stock_check_date = this.myDatePipe.transform(event,'yyyy-MM-dd')

  updateStock(){
    this.stockForm.setValue({
      "count":this.product.stock.count,
      "last_stock_check_date":this.product.stock.last_stock_check_date,
      "product":this.product.id
    })

    this.productService.updateProductStock(this.stockForm,this.product.id).subscribe((response:Stock) => {
      this.product.stock = response;
      this.matSnackBar.open("Product Stock was successfully updated","Congrats",{duration:3000})
    },error =>{
      this.matSnackBar.open("There was a problem updating your product stock","Sorry",{duration:3000})
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.maxDate = new Date()
  }

}
