import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.css']
})
export class SingleProductDetailsComponent implements OnInit {

  constructor() { }

  images:any = [
    {src : "../../../../../assets/andrew-pons-cLHPacdtpSY-unsplash (1).jpg", isDefault:false},
    {src : "../../../../../assets/andrew-pons-cLHPacdtpSY-unsplash (1).jpg", isDefault:false}
  ]

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
  }

}
