import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-variations',
  templateUrl: './with-variations.component.html',
  styleUrls: ['./with-variations.component.css']
})
export class WithVariationsComponent implements OnInit {

  constructor() { }

  colors:any[] = [
    {color:"red"},
    {color:"black"},
    {color:"blue"},
    {color:"orange"},
    {color:"violet"},
    {color:"violet"},
    {color:"violet"},
    {color:"violet"},
    {color:"violet"},
    {color:"violet"},
    {color:"violet"},
    {color:"violet"},
    {color:"violet"},
  ];

  sizes:any[] = [
    {value:"32"},
    {value:"32"},
    {value:"32"},
    {value:"32"},
    {value:"32"},
    {value:"32"},
    {value:"32"},
    {value:"32"},
    {value:"32"},
  ]

  ngOnInit(): void {
  }

}
