
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})

  export class IncrementComponent implements OnInit {
    
  number_lbl: number = 0; // declare and initialise the variable
    ngOnInit() {
    }
    constructor() { }
  increment_btn()
  {
    this.number_lbl++;
    }
  }
