import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TreeData } from 'mat-tree-select-input';

import { environment } from 'src/environments/environment';
import { Brand } from 'src/app/interfaces/brand/brand';
import { Type } from 'src/app/interfaces/type/type';
import { Category } from 'src/app/interfaces/category/category';

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

  constructSingleBrandData(data){
    let brand = {
      name:data.name,
      id:data.id,
      logo:data.logo
    }
    return brand
  }
  getBrands(){
    this.http.get(`${environment.BASE_URL}shop/brand/`).subscribe(response=>{
      this.brands.next(this.constructBrandData(response))
    },error=>{
      console.log(error)
    })
  }

  private categories = new BehaviorSubject<TreeData[]>([]);
  currentCategories = this.categories.asObservable();

  constructTreeData(data){
    return data.map(
      (item)=>{
        let o = {
          name: item.name,
          value: item.id,
          children: item.children.length ? this.constructTreeData(item.children) : []
        }
        return o
      }
    )
  }

  constructSingleCategoryData(data){
    return {
      id:data.id,
      name:data.name
    }
  }

  constructImageData(data){
    return data.map(
      (item)=>{
        return this.constructSingleImageData(item)
      }
    )
  }

  constructSingleImageData(data){
    return {
      id:data.id,
      image:data.image,
      isDefault:data.is_default
    }
  }

  getCategories(){
    this.http.get(`${environment.BASE_URL}shop/category/`).subscribe(response => {
      this.categories.next(this.constructTreeData(response))
    },error=>{
      console.log(error)
    })
  }


  private types = new BehaviorSubject<Type[]>([]);
  currentTypes =this.types.asObservable();

  constructTypeData(data){
    return data.map(
      (item)=>{
        let o = {
          name : item.name,
          id : item.id,
          description : item.description
        }
        return o
      }
    )
  }

  constructSingleTypeData(data){
    let brand = {
      name:data.name,
      id:data.id,
      description:data.description
    }
    return brand
  }

  getTypes(){
    this.http.get(`${environment.BASE_URL}shop/type/`).subscribe(response=>{
      this.types.next(this.constructTypeData(response))
    },error=>{
      console.log(error)
    })
  }

  constructor(private http:HttpClient) { }
}
