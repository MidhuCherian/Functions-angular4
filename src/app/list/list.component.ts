import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: object = [{}];//array
  liData: object = [{}];//array
  loaded: boolean = false;// initialise the boolean value as false
  constructor() { }

 

  ngOnInit() {
    this.data = [ // the set of JSON values
      { name: "Trucks" },
      { name: "Trailers" },
      { name: "Loads" },
      { name: "Kilometers" }
    ];

  }

  list_btn() { // the list function 
    this.loaded = true;// when function is called the boolean value is turned as true
    this.liData = this.data;
  }


}
