import { RegisteredMeans } from 'src/app/interfaces/registered-means/registered-means';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { Role } from 'src/app/classes/role/role';
import { RoleService } from 'src/app/services/roles/role.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { User } from 'src/app/classes/user/user';
import { DeliveryMeans } from 'src/app/interfaces/means/delivery-means'; 

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private roleService:RoleService,private http:HttpClient,private authService:AuthService) { }

  private registeredMeans = new BehaviorSubject<RegisteredMeans[]>([]);
  currentRegisteredMeans = this.registeredMeans.asObservable();

  getRegisteredMeans(){
    this.http.get(`${environment.BASE_URL}delivery/register_means/`).subscribe((response:RegisteredMeans[]) => this.registeredMeans.next(response))
  }

  createMeans(form:FormGroup){
    return this.http.post(`${environment.BASE_URL}delivery/register_means/`,form.value)
  }

  updateMeansImage(form:FormData,means_id:number){
    return this.http.put(`${environment.BASE_URL}delivery/register_means/image/${means_id}`,form)
  }

  private means = new BehaviorSubject<DeliveryMeans[]>([]);
  currentMeans = this.means.asObservable();

  getMeans(){
    this.http.get(`${environment.BASE_URL}delivery/means/`).subscribe((response:DeliveryMeans[]) => {
      this.means.next(response)
    })
  }

  getRiderInstance(){
    let myRoles : Role[] = [];
    this.roleService.currentRoles.subscribe(roles => myRoles = roles)

    let headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('access_token')}`
    })

    this.http.get(`${environment.BASE_URL}account/instance/`,{"headers":headers}).subscribe(response => {

      this.authService.updateUserInstance(new User(
        response['email'],
        myRoles.find(value => value.name === response['role']),
        response['first_name'],
        response['last_name'],
        response['member_since'],
        response['profile']['phone_number'],
        response['profile']['bio'],
        response['profile']['location'],
        response['profile']['avatar'],
        response['profile']['gender'],
        response['profile']['receive_notifications_via_email']
      ))
    })
  }

}
