import { Component, OnInit } from '@angular/core';

import { LoaderService } from '../services/loader/loader.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(public loaderService:LoaderService) { }

  ngOnInit(): void {
  }

}
