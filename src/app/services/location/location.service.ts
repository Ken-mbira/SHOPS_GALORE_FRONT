import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { TreeData } from 'mat-tree-select-input';
import { environment } from 'src/environments/environment';

import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locations = new BehaviorSubject<TreeData[]>([]);
  currentLocations = this.locations.asObservable();

  constructor(private http:HttpClient) { }

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

  getLocations(){
    this.http.get(`${environment.BASE_URL}delivery/location/`).subscribe((response) =>{
      this.locations.next(this.constructTreeData(response))
    })
  }
}
