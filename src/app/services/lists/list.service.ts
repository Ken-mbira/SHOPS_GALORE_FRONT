import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TreeData } from 'mat-tree-select-input';

import { environment } from 'src/environments/environment';
import { Brand } from 'src/app/interfaces/brand/brand';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private brands = new BehaviorSubject<Brand[]>([]);
  currentBrands = this.brands.asObservable();

  constructBrandData(data){
    return data.map(
      (item)=>{
        let o ={
          name:item.name,
          id:item.id,
          logo:item.logo
        }
        return o
      }
    )
  }
  getBrands(){
    this.http.get(`${environment.BASE_URL}shop/brand/`).subscribe(response=>{
      this.brands.next(this.constructBrandData(response))
    },error=>{
      console.log(error)
    })
  }
  constructor(private http:HttpClient) { }
}
