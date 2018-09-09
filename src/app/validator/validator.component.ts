import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {
 textValue: String = "";// initilaise the value enter in textbox as null
  output_lbl: String = ""// initilaise the message shown as null
  constructor() { }


  
  ngOnInit() {
  }
  submit_btn() { // Function to be executed when button is clicked
    if (this.textValue === "" || this.textValue === undefined)// check whether the value type in textbox is null or undefined
    {
      this.output_lbl = "Please Enter the value!!!!";// print the message
    }
    else {
      this.output_lbl = this.textValue;// otherwise the value entered in the textbox is shown as the message
    }
  }

}

